"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const shell = __importStar(require("shelljs"));
const copy_template_1 = __importDefault(require("./copy-template"));
const utils_1 = require("./utils");
function createProject({ projectName, templateName, ejsConfig }) {
    const projectPath = path.join(process.cwd(), projectName);
    const templatePath = path.join(__dirname, '../', 'templates', templateName);
    if (fs.existsSync(projectPath)) {
        utils_1.log.error(`Folder ${projectPath} exists. Delete or use another name.`);
        shell.exit(1);
    }
    fs.mkdirSync(projectPath);
    copy_template_1.default(templatePath, projectName, ejsConfig);
}
exports.default = createProject;
