import { ReactNode } from 'react';
import { ValueEdgeOne } from '../components/Dice/components/ValueEdgeOne/ValueEdgeOne';
import { ValueEdgeTwo } from '../components/Dice/components/ValueEdgeTwo/ValueEdgeTwo';
import { ValueEdgeThree } from '../components/Dice/components/ValueEdgeThree/ValueEdgeThree';
import { ValueEdgeFour } from '../components/Dice/components/ValueEdgeFour/ValueEdgeFour';
import { ValueEdgeFive } from '../components/Dice/components/ValueEdgeFive/ValueEdgeFive';
import { ValueEdgeSix } from '../components/Dice/components/ValueEdgeSix/ValueEdgeSix';

export function getValueEdge(value: number, edge: string): ReactNode {
    let node: ReactNode = null;

    switch(value) {
        case(1):
            node = <ValueEdgeOne edge={edge}/>
            break;
        case(2):
            node = <ValueEdgeTwo edge={edge}/>
            break;
        case(3):
            node = <ValueEdgeThree edge={edge}/>
            break;
        case(4):
            node = <ValueEdgeFour edge={edge}/>
            break;
        case(5):
            node = <ValueEdgeFive edge={edge}/>
            break;
        case(6):
            node = <ValueEdgeSix edge={edge}/>
            break;
    }

    return node;
}
