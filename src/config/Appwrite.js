import {Client,Account,Databases} from "appwrite"
export const IDEAS_COLLECTION_ID = "6611b02d18968d6146c4"; // Replace with your collection ID

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66105a34688d43d07c40');


export const account = new Account(client);    
export const database = new Databases(client,"66116c034958965cc5db"); 





