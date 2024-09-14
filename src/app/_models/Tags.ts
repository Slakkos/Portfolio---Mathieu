export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'white', 'angular.png');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'white', 'ts.png');
    static readonly CSHARP = new Tag('HTML', 'white', 'csharp.png');
    static readonly PYTHON = new Tag('Python', 'white', 'python.png');
    static readonly JAVA = new Tag('Java', 'white', 'java.png');
    static readonly NODEJS = new Tag('Node.JS', 'white', 'node.png');
    static readonly ASPNET = new Tag('ASP.NET', 'white', 'asp.png');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'white', 'js.png');
    static readonly REACT = new Tag('React', 'white', 'react.png');
    static readonly VUE = new Tag('Vue', 'white', 'vue.png');

    private constructor(public readonly key: string, public readonly color: string, public readonly image: string) {

    }

    toString() {
        return this.key;
    }

    GetImageOfTag() {
        return this.image;
    }
}