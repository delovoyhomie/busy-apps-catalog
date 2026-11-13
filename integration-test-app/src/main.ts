import { device } from "@shared/device";
import { column, render } from "@busy-app/busy-lib";
import manifest from "./appmeta/manifest.json";

/** A static fixture for checking catalog-to-Discord synchronization. */
function main(): void {
  const elements = render(column({ justify: "center", align: "center" }, [
    { type: "text", id: "sync-test", text: "SYNC TEST", font: "small", color: "#00E5FFFF" },
  ]));
  void device.DisplayDraw({ application_name: manifest.id, priority: 50, elements })
    .catch(error => console.error(`${manifest.id}: ${String(error)}`));

  const unbind = listen("input", event => {
    if (event.key === "back" && event.action === "short") setTimeout(unbind, 0);
  });
}

main();
