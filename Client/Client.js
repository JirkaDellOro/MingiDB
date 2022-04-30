var testMingiDB;
(function (testMingiDB) {
    window.addEventListener("load", start);
    let database = new URL(location.href).search.slice(1);
    async function start(_event) {
        try {
            await send("?", {});
        }
        catch (_e) {
            let output = `Add the correct address of your database as get-parameter in the url.\n`;
            output += `Example .../Client.html?https://mywebspace/Database\n\n`;
            output += _e;
            output += `\n\nSee more information in the console.`;
            alert(output);
        }
        document.forms[0].addEventListener("click", hndButton);
    }
    async function send(_query, _data) {
        let response = await fetch(database + _query + "&data=" + JSON.stringify(_data));
        output(await response.json());
        return true;
    }
    function output(_response) {
        document.querySelector("textarea").value = JSON.stringify(_response, null, 2);
    }
    function hndButton(_event) {
        let command = _event.target.textContent;
        let formdata = new FormData(document.forms[0]);
        let collection = formdata.get("collection");
        let query = `?command=${command}&collection=${collection}`;
        let data = {};
        switch (command) {
            case "insert":
            case "delete":
            case "find":
            case "update":
        }
        send(query, data);
    }
})(testMingiDB || (testMingiDB = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsV0FBVyxDQTJDcEI7QUEzQ0QsV0FBVSxXQUFXO0lBQ25CLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkMsSUFBSSxRQUFRLEdBQVcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFOUQsS0FBSyxVQUFVLEtBQUssQ0FBQyxNQUFhO1FBQ2hDLElBQUk7WUFDRixNQUFNLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDckI7UUFBQyxPQUFPLEVBQVcsRUFBRTtZQUNwQixJQUFJLE1BQU0sR0FBVyx5RUFBeUUsQ0FBQztZQUMvRixNQUFNLElBQUkseURBQXlELENBQUM7WUFDcEUsTUFBTSxJQUFJLEVBQUUsQ0FBQztZQUNiLE1BQU0sSUFBSSwwQ0FBMEMsQ0FBQztZQUNyRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDZjtRQUNELFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxLQUFLLFVBQVUsSUFBSSxDQUFDLE1BQWMsRUFBRSxLQUFhO1FBQy9DLElBQUksUUFBUSxHQUFhLE1BQU0sS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMzRixNQUFNLENBQUMsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM5QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxTQUFTLE1BQU0sQ0FBQyxTQUFpQjtRQUMvQixRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVELFNBQVMsU0FBUyxDQUFDLE1BQWE7UUFDOUIsSUFBSSxPQUFPLEdBQStCLE1BQU0sQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3JFLElBQUksUUFBUSxHQUFhLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLFVBQVUsR0FBdUIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRSxJQUFJLEtBQUssR0FBVyxZQUFZLE9BQU8sZUFBZSxVQUFVLEVBQUUsQ0FBQztRQUNuRSxJQUFJLElBQUksR0FBVyxFQUFFLENBQUM7UUFFdEIsUUFBUSxPQUFPLEVBQUU7WUFDZixLQUFLLFFBQVEsQ0FBQztZQUNkLEtBQUssUUFBUSxDQUFDO1lBQ2QsS0FBSyxNQUFNLENBQUM7WUFDWixLQUFLLFFBQVEsQ0FBQztTQUNmO1FBRUQsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0FBQ0gsQ0FBQyxFQTNDUyxXQUFXLEtBQVgsV0FBVyxRQTJDcEIifQ==