import { Container } from 'inversify';
import { DependencyA, DependencyB } from './dependencies';

var container = new Container();

container.bind<DependencyA>(DependencyA).toSelf();
container.bind<DependencyB>(DependencyB).toSelf();

export default container;