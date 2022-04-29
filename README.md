# MingiDB
An extremely minimal implementation of some database functionality for educational purposes.
Mimics some commands used with MongoDB, but uses single json-files as collections.
Not to be used for anything else than eductation...!

## Installation
Simply copy the file 'index.php' into a folder for your database on your server running php. 

## Use
Send commands and data as get-parameters. The structure is

<pre>
https://UrlOfYourDatabaseFolder/?command=...&collection=...&id=...&data={...}
</pre>

where not all parts of the query must be present at all times

### Create a collection
<pre>
command=create&collection=NameOfCollection
</pre>
### Drop a collection
<pre>
command=drop&collection=NameOfCollection
</pre>
<pre>
command=create&collection=...&id=...&data={...}
</pre>
<pre>
command=create&collection=...&id=...&data={...}
</pre>