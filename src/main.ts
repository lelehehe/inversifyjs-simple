    
import 'reflect-metadata';
import { Service } from './service';
import container from './container';

const service: Service = container.resolve<Service>(Service);

console.log(service.getAllNames());
