export interface IEdgs {
    value: string;
    visibleEdgs: number[];
}

export function createEdgesList(): IEdgs[] {
    const result = [];

    for (let i = 0; i < 6; i ++) {
        const edg: IEdgs = {
            value: '',
            visibleEdgs: [0, 0],
        };

        switch(i) {
            case(0):
                edg.visibleEdgs = [2, 3];
                break;
            case(1):
                edg.visibleEdgs = [4, 5];
                break;
            case(2):
                edg.visibleEdgs = [3, 0];
                break;
            case(3):
                edg.visibleEdgs = [0, 2];
                break;
            case(4):
                edg.visibleEdgs = [5, 1];
                break;
            case(5):
                edg.visibleEdgs = [1, 4];
                break;
        };

        result.push(edg);
    }

    return result;
}

export function validateEdgeValue(edges: IEdgs[], value: string): string {
    if (value === '') return '';

    if (!value.match(/[1-6]/)) return 'Enter a number from 1 to 6';

    const otherValues: string[] = [];

    for (let edge of edges) {
        if (edge.value) otherValues.push(edge.value);
    }

    if (otherValues.includes(value)) return `${value} has already been entered`

    return '';
}

export function validateAllEdgesValue(edges: IEdgs[]): string {
    for (let edge of edges) {
        if (edge.value === '') return 'To save the settings, fill in all edges of the dice';
    }

    return '';
}