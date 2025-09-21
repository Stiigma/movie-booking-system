export interface EventBusPort {
    publish(event: any): Promise<void>;
}
