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
        if (_event.target instanceof HTMLAnchorElement)
            return hndAnchor(_event);
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
    function hndAnchor(_event) {
        let command = _event.target.textContent;
        let fields = ["name", "firstname", "age", "passed", "id"];
        console.log(command);
        switch (command) {
            case "Clear":
                fields.forEach((_name) => document.querySelector(`[name=${_name}]`).value = "");
                break;
            case "Fill":
                fields.forEach((_name) => {
                    let element = document.querySelector(`[name=${_name}]`);
                    switch (_name) {
                        case "name":
                            element.value = Math.random() < 0.5 ? "Smith" : "Jones";
                            break;
                        case "firstname":
                            element.value = Math.random() < 0.5 ? "Paul" : "Mary";
                            break;
                        case "age":
                            element.value = (18 + Math.random() * 5).toFixed(0);
                            break;
                        case "passed":
                            element.value = Math.random() < 0.5 ? "true" : "false";
                            break;
                    }
                });
                break;
        }
    }
})(testMingiDB || (testMingiDB = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsV0FBVyxDQWtHcEI7QUFsR0QsV0FBVSxXQUFXO0lBQ25CLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkMsSUFBSSxRQUFRLEdBQVcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFOUQsS0FBSyxVQUFVLEtBQUssQ0FBQyxNQUFhO1FBQ2hDLElBQUk7WUFDRixNQUFNLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFBQyxPQUFPLEVBQVcsRUFBRTtZQUNwQixJQUFJLE1BQU0sR0FBVyx5RUFBeUUsQ0FBQztZQUMvRixNQUFNLElBQUksMERBQTBELENBQUM7WUFDckUsTUFBTSxJQUFJLEVBQUUsQ0FBQztZQUNiLE1BQU0sSUFBSSwwQ0FBMEMsQ0FBQztZQUNyRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDZjtRQUNELFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxLQUFLLFVBQVUsSUFBSSxDQUFDLE1BQWMsRUFBRSxLQUFhO1FBQy9DLElBQUksS0FBSyxHQUFXLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFELFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUV4RSxJQUFJLFFBQVEsR0FBYSxNQUFNLEtBQUssQ0FBQyxRQUFR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