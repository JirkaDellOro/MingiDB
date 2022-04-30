namespace testMingiDB {
  window.addEventListener("load", start);
  let database: string = new URL(location.href).search.slice(1);

  async function start(_event: Event): Promise<void> {
    try {
      await send("", null);
    } catch (_e: unknown) {
      let output: string = `Add the correct address of your database as get-parameter in the url.\n`;
      output += `Example .../Client.html?https://mywebspace/Database\n\n`;
      output += _e;
      output += `\n\nSee more information in the console.`;
      alert(output);
    }
    document.forms[0].addEventListener("click", hndButton);
  }

  async function send(_query: string, _data: Object): Promise<boolean> {
    let response: Response = await fetch(database);
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