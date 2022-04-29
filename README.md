# MingiDB
An extremely minimal implementation of some database functionality for educational purposes.
Mimics some commands used with MongoDB, but uses single json-files as collections.
Not to be used for anything else than education...!

# Installation
Simply copy the script file 'index.php' into a folder for your database on your server running php. Make sure it has the rights to create, delete and change files on your server.

# Use
Send commands and data as get-parameters. The structure is
<pre>
https://UrlOfYourDatabaseFolder/?command=...&collection=...&id=...&data={DataInJsonFormat}
</pre>
where not all parts of the query must be present at all times and the pascal-case parts like the dots need to be replaced by your information. 

The script returns a Json-string in the following format
<pre>
{'status':..., 'data':{...}}
</pre>
where status takes on the values 'success' or 'failure and data contains a Json-string with the results or an error message.

### Create a collection
<pre>
command=create&collection=NameOfCollection
</pre>
### Drop a collection
<pre>
command=drop&collection=NameOfCollection
</pre>
### Show all collections
<pre>
command=show
</pre>
### Insert a document
<pre>
command=insert&collection=NameOfCollection&data={KeyValuePairs}
</pre>
### Delete a document
<pre>
command=delete&collection=NameOfCollection&id=IdOfTheDocument
</pre>
where id was created by the script and needs to be retrieved first
### Find documents
<pre>
command=find&collection=NameOfCollection&id=IdOfTheDocument
</pre>
retrieves the document with the given id, or
<pre>
command=find&collection=NameOfCollection&data={KeyValuePairs}
</pre>
where data contains a filter. Only the documents matching the filter will be retrieved. If data is the empty filter {}, all documents of the collection are retrieved.
### Update a document
<pre>
command=find&collection=NameOfCollection&id=IdOfTheDocument&data={KeyValuePairs}
</pre>
where data contains the values to change to at the given key within the document specified by id.

# Example/Test/Tutorial

| #  | action                                                                                                                                                    | result                                                                                                                                                                                                |
|----|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1  | Get access to your server running php5 or above, for example via ftp                                                                                      | You see the directory structure of your server                                                                                                                                                        |
| 2  | Create a folder on your server named `Database`                                                                                                           | The folder `Database` appears                                                                                                                                                                         |
| 3  | Copy the file `index.php` to the folder                                                                                                                   | The file appears inside the folder                                                                                                                                                                    |
| 4  | In a browser, enter the http-Address of your server followed by `Database/`                                                                               | The page shows `{"status":"failure","data":"no collection specified"}`, which means that MingiDB runs and answers                                                                                     |
| 5  | Extend the address with the query string `?command=show`                                                                                                  | The page shows `{"status":"success","data":[]}`, which means that MingiDB successfully retrieved the information that no collections exist                                                            |
| 6  | Change the query string  to `?command=create&collection=Students`                                                                                         | The page shows `{"status":"success"}`. Check the folder, there is now a file `Students.json` with a size of 0, since it's empty                                                                       |
| 7  | Add a document to the collection by typing `?command=insert&collection=Students&data={"name":"Doe","firstname":"John","age":21,"registered":true}`        | The page shows `{"status":"success","data":{"id":"626c2b283432c"}}`, where the id most likely differs in this example. View the contents of the file `Students.json`, it shows the data you inserted. |
| 8  | Add another document to the collection by typing `?command=insert&collection=Students&data={"name":"Doe","firstname":"Mary","age":20,"registered":false}` | The page shows another success-message and Mary was added to the file `Students.json`                                                                                                                 |
| 9  | Type `?command=find&collection=Students`                                                                                                                  | The page shows success and all documents stored in `Students.json`                                                                                                                                    |
| 10 | Type `?command=find&collection=Students&data{"name":"Doe"}`                                                                                               | The page shows success and again all documents, since Mary and John share the same family name                                                                                                        |
| 11 | Type `?command=find&collection=Students&data={"age":22}`                                                                                                  | The page shows `{"status":"success","data":[]}`. No documents were retrieved, since there is no student at age 22                                                                                     |
| 12 | Type `?command=find&collection=Students&data={"registered":true}`                                                                                         | The page shows John's document, since Mary is not registered yet                                                                                                                                      |
| 13 | Type `?command=update&collection=Students&id=...&data={"registered":true}`, but replace the dots with the id of Mary's document                                                                                  |                                                                                                                                                                                                       |