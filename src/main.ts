import { getUkesMeny, getStandardVarer } from "./fire";
import { DocumentData, DocumentSnapshot } from "firebase/firestore";

const normal: HTMLDivElement | null = document.querySelector("#normalmeny");
const ukes: HTMLDivElement | null = document.querySelector("#varmmeny");

const standardVarer = await getStandardVarer();
const ukesMeny = await getUkesMeny();

const form: HTMLFormElement | undefined = document.querySelector("form") ?? undefined;
const submitBtn: HTMLElement | null = document.querySelector("#submit");

const inputs = form?.querySelectorAll("input");

type item = {
        rett: string,
        pris: number,
        allergen: Array<string>,
        meny: string
};

inputs?.forEach((input) => {
        if (input.id == "submit") return;
        input.addEventListener("keyup", (e: KeyboardEvent) => {
                (<HTMLInputElement>e.target).value += (<HTMLInputElement>e.target).textContent;
                console.log((<HTMLInputElement>e.target).value);
        });
});

const validateFormInput = (input: HTMLInputElement) => {
        return input.value.length > 0
};

submitBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        let newItem: item = {};
        inputs?.forEach((input) => {
                if (input.id == "submit") return;
                if (input.value.length == 0) {
                        alert(`Field "${input.id}" is empty...\nAll fields are required to be filled.`);
                        return;
                }
                console.log(input.value);
        });
});


const toTitlecase = (str: DocumentData) => {
        const newStr = str.toString();
        return `${newStr.slice(0, 1).toUpperCase()}${newStr.slice(1)}`;
};

ukesMeny.forEach((doc: DocumentSnapshot) => {
        if (!ukes) return; // this is just to make typescript happy
        ukes.innerHTML += `
        <div class="shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] rounded grid grid-rows-2 grid-cols-[1fr_0.5fr] px-4 py-4 w-72">
            <div>${toTitlecase(doc.data()?.rett)}</div>
            <div>Pris: ${toTitlecase(doc.data()?.pris)}kr</div>
            <div>Allergen: ${toTitlecase(doc.data()?.allergen)}</div>
        </div>
    `;
});

standardVarer.forEach((doc: DocumentSnapshot) => {
        if (!normal) return; // this is also just to make typescript happy
        normal.innerHTML += `
        <div class="shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] rounded grid grid-rows-2 grid-cols-[1fr_0.5fr] px-4 py-4 w-72">
        <div>${toTitlecase(doc.data()?.rett)}</div>
            <div>Pris: ${toTitlecase(doc.data()?.pris)}kr</div>
            <div>Allergen: ${toTitlecase(doc.data()?.allergen)}</div>
        </div>
    `;
});


