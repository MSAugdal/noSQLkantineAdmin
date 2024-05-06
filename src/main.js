import { getStandardVarer, getUkesMeny } from "./fire";
const app = document.querySelector("#app");
const normal = document.querySelector("#normalmeny");
const ukes = document.querySelector("#varmmeny");

const standardVarer = await getStandardVarer();
const ukesMeny = await getUkesMeny();

const toTitlecase = (str) => {
    str = str.toString();
    return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
};
console.log(toTitlecase("wow"));

ukesMeny.forEach((doc) => {
    ukes.innerHTML += `
        <div class="shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] rounded grid grid-rows-2 grid-cols-[1fr_0.5fr] px-4 py-4 w-72">
            <div>${toTitlecase(doc.data().rett)}</div>
            <div>Pris: ${toTitlecase(doc.data().pris)}kr</div>
            <div>Allergen: ${toTitlecase(doc.data().allergen)}</div>
        </div>
    `;
});

standardVarer.forEach((doc) => {
    normal.innerHTML += `
        <div class="shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] rounded grid grid-rows-2 grid-cols-[1fr_0.5fr] px-4 py-4 w-72">
        <div>${toTitlecase(doc.data().rett)}</div>
            <div>Pris: ${toTitlecase(doc.data().pris)}kr</div>
            <div>Allergen: ${toTitlecase(doc.data().allergen)}</div>
        </div>
    `;
});

