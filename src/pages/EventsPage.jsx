import EventSection from "../components/EventSection";
import { useEffect } from "react";

function EventsPage({ events, onDeleteEvent, onEditEvent }) {
    useEffect(()=>{
        fetch("http://localhost:5000/api/events")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
        });
    }, []);
    return (
        <>
            <section>
                <p className="section-label">
                    All Campus Activities
                </p>

                <h1>Events</h1>

                <p>
                    Explore all workshops, clubs, sports, and cultural activities
                </p>
            </section>

            <EventSection
                events={events}
                onDeleteEvent={onDeleteEvent}
                onEditEvent={onEditEvent}
            />
        </>
    );
}

export default EventsPage;