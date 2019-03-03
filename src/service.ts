import { DependencyA, DependencyB } from './dependencies';
import { inject, injectable } from 'inversify';

@injectable()
export class Service {
    protected depA: DependencyA;
    protected depB: DependencyB;

    constructor(
        @inject(DependencyA) dependencyA: DependencyA,
        @inject(DependencyB) dependencyB: DependencyB,
    ) {
        this.depA = dependencyA;
        this.depB = dependencyB;
    }

    public getAllNames(): string[] {
        return [this.depA.getName(), this.depB.getName()];
    }
}