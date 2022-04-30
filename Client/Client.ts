namespace testMingiDB {
  window.addEventListener("load", start);
  let database: string = new URL(location.href).search.slice(1);

  function start(_event: Event): void {
    send("", null);
    document.forms[0].addEventListener("click", hndButton);
  }

  async function send(_query: string, _data: Object): Promise<boolean> {
    let response: Response = await fetch(database, {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" }
    });
    console.log(response);
    return true;
  }

  function hndButton(_event: Event): void {
    let command: string = (<HTMLButtonElement>_event.target).textContent;
    let formdata: FormData = new FormData(document.forms[0]);
    let collection: FormDataEntryValue = formdata.get("collection");
    let query: string = `?command=${command}&collection=${collection}`;

    switch (command) {
      case "insert":
      case "delete":
      case "find":
      case "update":
    }


  }
}