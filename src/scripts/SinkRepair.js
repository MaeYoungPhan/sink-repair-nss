import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./Requests.js"

export const SinkRepair = () => {
    return `
    <h1>Maude and Merle's Sink Repair</h1>
    <section class="serviceForm">
        ${ServiceForm()}
    </section>

    <h2 class="request_header">Service Requests</h2>
    <section class="serviceRequests">
        ${Requests()}
    </section>
    `
}

