import { EventBusPort } from "src/modules/users/application/ports/event-bus.port";
export declare class OutboxEventBusAdapter implements EventBusPort {
    publish(event: any): Promise<void>;
}
