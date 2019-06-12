import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as Cosmos from "@azure/cosmos";
import * as Model from "../models/todoItem";

export class CosmosService {

    private static instance: CosmosService;

    private readonly cosmosHost = "<your_db>.documents.azure.com:443/";
    private readonly primaryKey = "<primary_key>";
    private readonly database = "ToDoList";
    private readonly collection = "Items";

    private client: Cosmos.CosmosClient;
    db: Cosmos.Database;
    container: Cosmos.Container;

    public items: Model.Todo[];

    constructor() {
        this.client = new Cosmos.CosmosClient({
            endpoint: `https://${this.cosmosHost}`,
            auth: {
                masterKey: this.primaryKey
            },
            consistencyLevel: "Eventual",
            connectionPolicy: {
                enableEndpointDiscovery: false
            }
        });

        this.db = this.client.database(this.database);
        this.container = this.db.container(this.collection);
    }

    async addItem(todo: Model.Todo) {
        const item = await this.container.items.create(todo)
            .catch(err => console.error(err));

        console.log(item);
    }

    async listCollections(): Promise<Model.Todo[]> {

        const response = await this.container.items
            .readAll<Model.Todo>().fetchAll();

        console.warn(response);

        this.items = response.resources;
        console.log(`${this.items.length} items received`);

        return this.items;
    }

    public static getInstance(): CosmosService {
        if (!CosmosService.instance)
            CosmosService.instance = new CosmosService();

        return CosmosService.instance;
    }
}