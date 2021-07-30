let tasks = $("#tasks");
let badd = $("#badd");
let breset = $("#breset");
let bsort = $("#bsort");
let bclean = $("#bclean");
let inpnewtask = $("#inpnewtask");

function additem() {
  let titem = $("<li>", {
    class: "list-group-item",
    text: inpnewtask.val(),
  });
  titem.click(() => {
    titem.toggleClass("done");
  });
  tasks.append(titem);
  inpnewtask.val("");
  funcbut();
}
function cleantitem() {
  $("#tasks .done").remove();
  funcbut();
}
function sortitem() {
  $("#tasks .done").appendTo(tasks);
}
function funcbut() {
  breset.prop("disabled", inpnewtask.val() == "");
  badd.prop("disabled", inpnewtask.val() == "");
  bsort.prop("disabled", tasks.children().length < 2);
  bclean.prop("disabled", tasks.children().length < 1);
}
inpnewtask.keypress((e) => {
  if (e.which == 13) additem();
});
inpnewtask.on("input", funcbut);
badd.click(additem);
breset.click(() => {
  inpnewtask.val("");
  funcbut();
});
bclean.click(cleantitem);
bsort.click(sortitem);
