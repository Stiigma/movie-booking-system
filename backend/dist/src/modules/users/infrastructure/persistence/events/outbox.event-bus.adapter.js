"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutboxEventBusAdapter = void 0;
class OutboxEventBusAdapter {
    async publish(event) {
        console.log("Event published to outbox:", event);
        console.log('[OUTBOX] queued event:', JSON.stringify(event));
    }
}
exports.OutboxEventBusAdapter = OutboxEventBusAdapter;
//# sourceMappingURL=outbox.event-bus.adapter.js.map