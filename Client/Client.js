var testMingiDB;
(function (testMingiDB) {
    window.addEventListener("load", start);
    let database = new URL(location.href).search.slice(1);
    function start(_event) {
        send("", null);
        document.forms[0].addEventListener("click", hndButton);
    }
    async function send(_query, _data) {
        let response = await fetch(database, {
            method: "GET",
            mode: "cors",
            headers: { "Content-Type": "application/json" }
        });
        console.log(response);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsV0FBVyxDQWtDcEI7QUFsQ0QsV0FBVSxXQUFXO0lBQ25CLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkMsSUFBSSxRQUFRLEdBQVcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFOUQsU0FBUyxLQUFLLENBQUMsTUFBYTtRQUMxQixJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2YsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELEtBQUssVUFBVSxJQUFJLENBQUMsTUFBYyxFQUFFLEtBQWE7UUFDL0MsSUFBSSxRQUFRLEdBQWEsTUFBTSxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQzdDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUU7U0FDaEQsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxTQUFTLFNBQVMsQ0FBQyxNQUFhO1FBQzlCLElBQUksT0FBTyxHQUErQixNQUFNLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUNyRSxJQUFJLFFBQVEsR0FBYSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxVQUFVLEdBQXVCLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEUsSUFBSSxLQUFLLEdBQVcsWUFBWSxPQUFPLGVBQWUsVUFBVSxFQUFFLENBQUM7UUFFbkUsUUFBUSxPQUFPLEVBQUU7WUFDZixLQUFLLFFBQVEsQ0FBQztZQUNkLEtBQUssUUFBUSxDQUFDO1lBQ2QsS0FBSyxNQUFNLENBQUM7WUFDWixLQUFLLFFBQVEsQ0FBQztTQUNmO0lBR0gsQ0FBQztBQUNILENBQUMsRUFsQ1MsV0FBVyxLQUFYLFdBQVcsUUFrQ3BCIn0=