var testMingiDB;
(function (testMingiDB) {
    window.addEventListener("load", start);
    let database = new URL(location.href).search.slice(1);
    async function start(_event) {
        try {
            await send("?", null);
        }
        catch (_e) {
            let output = `Add the correct address of your database as get-parameter in the url.\n`;
            output += `Example .../Client.html?https://mywebspace/Database/\n\n`;
            output += _e;
            output += `\n\nSee more information in the console.`;
            alert(output);
        }
        document.forms[0].addEventListener("click", hndButton);
    }
    async function send(_query, _data) {
        let query = _query + (_data ? "&data=" + JSON.stringify(_data) : "");
        document.querySelector("input#query").value = query;
        let response = await fetch(database + query);
        output(await response.json());
        return true;
    }
    function output(_response) {
        document.querySelector("textarea").value = JSON.stringify(_response, null, 2);
    }
    function hndButton(_event) {
        if (!(_event.target instanceof HTMLButtonElement))
            return;
        let command = _event.target.textContent;
        let formdata = new FormData(document.forms[0]);
        let collection = formdata.get("collection");
        let id = formdata.get("id");
        let query = `?command=${command}&collection=${collection}`;
        let data = {};
        ["name", "firstname", "age", "passed"].forEach((_name) => { if (formdata.get(_name))
            data[_name] = formdata.get(_name); });
        switch (command) {
            case "delete":
                if (!id)
                    return alert("To delete a document, pass the id");
                data = {};
                query += `&id=${id}`;
                break;
            case "find":
                if (!id)
                    break;
                data = null;
                query += `&id=${id}`;
                break;
            case "update":
                if (!id)
                    return alert("To update a document, pass the id");
                query += `&id=${id}`;
                break;
        }
        send(query, data);
    }
})(testMingiDB || (testMingiDB = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsV0FBVyxDQWtFcEI7QUFsRUQsV0FBVSxXQUFXO0lBQ25CLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkMsSUFBSSxRQUFRLEdBQVcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFOUQsS0FBSyxVQUFVLEtBQUssQ0FBQyxNQUFhO1FBQ2hDLElBQUk7WUFDRixNQUFNLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFBQyxPQUFPLEVBQVcsRUFBRTtZQUNwQixJQUFJLE1BQU0sR0FBVyx5RUFBeUUsQ0FBQztZQUMvRixNQUFNLElBQUksMERBQTBELENBQUM7WUFDckUsTUFBTSxJQUFJLEVBQUUsQ0FBQztZQUNiLE1BQU0sSUFBSSwwQ0FBMEMsQ0FBQztZQUNyRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDZjtRQUNELFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxLQUFLLFVBQVUsSUFBSSxDQUFDLE1BQWMsRUFBRSxLQUFhO1FBQy9DLElBQUksS0FBSyxHQUFXLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFELFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUV4RSxJQUFJLFFBQVEsR0FBYSxNQUFNLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsU0FBUyxNQUFNLENBQUMsU0FBaUI7UUFDL0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCxTQUFTLFNBQVMsQ0FBQyxNQUFhO1FBQzlCLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLFlBQVksaUJBQWlCLENBQUM7WUFDL0MsT0FBTztRQUVULElBQUksT0FBTyxHQUErQixNQUFNLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUNyRSxJQUFJLFFBQVEsR0FBYSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxVQUFVLEdBQXVCLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEUsSUFBSSxFQUFFLEdBQXVCLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxLQUFLLEdBQVcsWUFBWSxPQUFPLGVBQWUsVUFBVSxFQUFFLENBQUM7UUFDbkUsSUFBSSxJQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUM1QyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMzRSxDQUFDO1FBRUYsUUFBUSxPQUFPLEVBQUU7WUFDZixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLEVBQUU7b0JBQ0wsT0FBTyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDVixLQUFLLElBQUksT0FBTyxFQUFFLEVBQUUsQ0FBQztnQkFDckIsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxJQUFJLENBQUMsRUFBRTtvQkFDTCxNQUFNO2dCQUNSLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ1osS0FBSyxJQUFJLE9BQU8sRUFBRSxFQUFFLENBQUM7Z0JBQ3JCLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLEVBQUU7b0JBQ0wsT0FBTyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztnQkFDcEQsS0FBSyxJQUFJLE9BQU8sRUFBRSxFQUFFLENBQUM7Z0JBQ3JCLE1BQU07U0FDVDtRQUVELElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztBQUNILENBQUMsRUFsRVMsV0FBVyxLQUFYLFdBQVcsUUFrRXBCIn0=