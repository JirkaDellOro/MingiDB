var testMingiDB;
(function (testMingiDB) {
    window.addEventListener("load", start);
    let database = new URL(location.href).search.slice(1);
    async function start(_event) {
        try {
            await send("", null);
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
        let response = await fetch(database);
        return true;
    }
    function hndButton(_event) {
        let command = _event.target.textContent;
        let formdata = new FormData(document.forms[0]);
        let collection = formdata.get("collection");
        let query = `?command=${command}&collection=${collection}`;
        switch (command) {
            case "insert":
            case "delete":
            case "find":
            case "update":
        }
    }
})(testMingiDB || (testMingiDB = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsV0FBVyxDQXFDcEI7QUFyQ0QsV0FBVSxXQUFXO0lBQ25CLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkMsSUFBSSxRQUFRLEdBQVcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFOUQsS0FBSyxVQUFVLEtBQUssQ0FBQyxNQUFhO1FBQ2hDLElBQUk7WUFDRixNQUFNLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdEI7UUFBQyxPQUFPLEVBQVcsRUFBRTtZQUNwQixJQUFJLE1BQU0sR0FBVyx5RUFBeUUsQ0FBQztZQUMvRixNQUFNLElBQUkseURBQXlELENBQUM7WUFDcEUsTUFBTSxJQUFJLEVBQUUsQ0FBQztZQUNiLE1BQU0sSUFBSSwwQ0FBMEMsQ0FBQztZQUNyRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDZjtRQUNELFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxLQUFLLFVBQVUsSUFBSSxDQUFDLE1BQWMsRUFBRSxLQUFhO1FBQy9DLElBQUksUUFBUSxHQUFhLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFNBQVMsU0FBUyxDQUFDLE1BQWE7UUFDOUIsSUFBSSxPQUFPLEdBQStCLE1BQU0sQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3JFLElBQUksUUFBUSxHQUFhLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLFVBQVUsR0FBdUIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRSxJQUFJLEtBQUssR0FBVyxZQUFZLE9BQU8sZUFBZSxVQUFVLEVBQUUsQ0FBQztRQUVuRSxRQUFRLE9BQU8sRUFBRTtZQUNmLEtBQUssUUFBUSxDQUFDO1lBQ2QsS0FBSyxRQUFRLENBQUM7WUFDZCxLQUFLLE1BQU0sQ0FBQztZQUNaLEtBQUssUUFBUSxDQUFDO1NBQ2Y7SUFHSCxDQUFDO0FBQ0gsQ0FBQyxFQXJDUyxXQUFXLEtBQVgsV0FBVyxRQXFDcEIifQ==