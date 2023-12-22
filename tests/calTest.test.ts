import { describe, it } from "mocha";
import { expect } from "chai";
import {main} from "../src/index";

describe("Test Calculator Functions", () => {
    it("Test addition", () => {
        expect(main("+",1,2)).to.equal(3);
    });

    it("Test subtraction", () => {
        expect(main("-",2,1)).to.equal(1);
    });


})