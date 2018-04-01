import * as child_process from "child_process";
import debug from "debug";
import * as fs from "fs";
import * as path from "path";

const error = debug("tshark:error");
class Tshark {
    public static getProcessPath(processName: string = "tshark"): string {
        let tsharkPath: string = "";
        if (process.platform === "win32") {
            const programFilePaths = [
                process.env.ProgramFiles,
                process.env["ProgramFiles(x86)"],
            ];
            for (const programFilePath of programFilePaths) {
                if (programFilePath) {
                    const processFullPath = path.join(programFilePath, "Wireshark", `${processName}.exe`);
                    try {
                        fs.accessSync(processFullPath);
                        tsharkPath = processFullPath;
                        break;
                    } catch (e) {
                        error(e);
                    }
                }
            }
        } else {
            if (process.env.PATH) {
                const paths = process.env.PATH.split(";");
                for (const onePath of paths) {
                    const processFullPath = path.join(onePath, processName);
                    try {
                        fs.accessSync(processFullPath);
                        tsharkPath = processFullPath;
                    } catch (e) {
                        error(e);
                    }
                }
            }
        }
        if (tsharkPath === "") {
            throw new Error("tshark not found");
        }
        return tsharkPath;
    }
    public static get version(): string {
        const tsharkCmd = this.getProcessPath();
        const tsharkVer = child_process.execSync(`"${tsharkCmd}" -v`)
            .toString().split(/\r\n|\r|\n/)[0].match(".*\\s(\\d+\.\\d+\.\\d+).*");
        if (tsharkVer === null) {
            throw new Error("tshark version not fond");
        }
        return tsharkVer[1];
    }
    constructor() {
        const i = 0;
    }
}

export default Tshark;
