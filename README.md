# MingiDB
An extremely minimal implementation of some database functionality for educational purposes.
Mimics some commands used with MongoDB, but uses single json-files as collections.
Not to be used for anything else than eductation...!

## Installation
Simply copy the file 'index.php' into a folder for your database on your server running php. 

## Use
Send commands and data as get-parameters. The structure is
<pre>
https://UrlOfYourDatabaseFolder/?command=...&collection=...&id=...&data={DataInJsonFormat}
</pre>
where not all parts of the query must be present at all times and the pascal-case parts like the dots need to be replaced by your information. 

The script returns a Json-string in the following format
<pre>
{"status":..., "data":{...}}
</pre>
where status takes on the values "success" or "failure and data contains a Json-string with the results or an error message.

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