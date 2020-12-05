import {css} from "./css.js";

export default class Digda {
	constructor() {
		this._createDigda()
	}

	_createDigda() {
		const style = document.createElement('style');
		if (style.styleSheet) {
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}
		document.getElementsByTagName('head')[0].appendChild(style);

		const digdaAll = Array.from(document.getElementsByClassName("digda"));
		digdaAll.forEach(element => {
			const stoneNum = 5;
			const digdaStone = [];
			const digdaWrapper = document.createElement("div")
			const digdaMain = document.createElement("div")
			const digdaBody = document.createElement("div")
			const digdaEyeRight = document.createElement("div")
			const digdaEyeLeft = document.createElement("div")
			const digdaEyeWhiteRight = document.createElement("div")
			const digdaEyeWhiteLeft  = document.createElement("div")
			const digdaNose = document.createElement("div")
			const digdaStoneWrapper = document.createElement("div")
			for(let i = 0; i < stoneNum; i++){
				digdaStone.push(document.createElement("div"))
			}

			this._addStyleElement(digdaWrapper, 			element, 					"digda-wrapper"					)
			this._addStyleElement(digdaMain, 					digdaWrapper, 			"digda-main"					)
			this._addStyleElement(digdaBody, 					digdaMain, 					"digda-body"					)
			this._addStyleElement(digdaEyeRight,			digdaBody, 					"digda-eye-right"			)
			this._addStyleElement(digdaEyeWhiteRight,	digdaEyeRight, 			"digda-eye-white"			)
			this._addStyleElement(digdaEyeLeft, 			digdaBody, 					"digda-eye-left"			)
			this._addStyleElement(digdaEyeWhiteLeft,	digdaEyeLeft, 			"digda-eye-white"			)
			this._addStyleElement(digdaNose, 					digdaBody, 					"digda-nose"					)
			this._addStyleElement(digdaStoneWrapper, 	digdaWrapper, 			"digda-stone-wrapper"	)
			for(let i = 0; i < stoneNum; i++){
				this._addStyleElement(digdaStone[i], 		digdaStoneWrapper, 	"digda-stone"					)
			}
		});
	}

	_addStyleElement = (element, target, className) => {
		element.className = className;
		target.appendChild(element);
	}
}