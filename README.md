# ionicosmos
Demo Todo App with Ionic and Cosmosdb

#Configuration
Add your cosmosdb endpoint,database,container name in the Cosmos-service.ts file

    private readonly cosmosHost = "<your_db>.documents.azure.com:443/";
    private readonly primaryKey = "<primary_key>";
    private readonly database = "ToDoList";
    private readonly collection = "Items";
    
 #Blog
 https://sajeetharan.com/2019/06/12/build-hybrid-apps-with-cosmos-db-ionic/
