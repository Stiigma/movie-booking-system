import { EventBusPort } from "src/modules/users/application/ports/event-bus.port";

export class OutboxEventBusAdapter implements EventBusPort {
    async publish(event: any): Promise<void> {
        // Aquí iría la lógica para publicar el evento en el bus de eventos real
        console.log("Event published to outbox:", event);
        console.log('[OUTBOX] queued event:', JSON.stringify(event));
    }
}