import * as tshark from "./tshark"
// @ponicode
describe("tshark.default.getProcessPath", () => {
    test("0", () => {
        let callFunction: any = () => {
            tshark.default.getProcessPath("tshark")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            tshark.default.getProcessPath("Producer")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            tshark.default.getProcessPath("Architect")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            tshark.default.getProcessPath("Developer")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            tshark.default.getProcessPath("Manager")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            tshark.default.getProcessPath("")
        }
    
        expect(callFunction).not.toThrow()
    })
})
