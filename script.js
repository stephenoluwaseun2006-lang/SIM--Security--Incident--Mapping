const incidentForm = document.getElementById("incidentForm");
const formMessage = document.getElementById("formMessage");
const reportsList = document.getElementById("reportsList");
const noReports = document.getElementById("noReports");

incidentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const reporter = document.getElementById("reporter").value;
    const incidentType = document.getElementById("incidentType").value;
    const location = document.getElementById("location").value;
    const incidentDate = document.getElementById("incidentDate").value;
    const incidentTime = document.getElementById("incidentTime").value;
    const description = document.getElementById("description").value;

    const reportCard = document.createElement("div");
    reportCard.className = "report-card";

    const title = document.createElement("h3");
    title.textContent = incidentType;

    const locationText = document.createElement("p");
    locationText.textContent = "Location: " + location;

    const dateText = document.createElement("p");
    dateText.textContent = "Date: " + incidentDate;

    const timeText = document.createElement("p");
    timeText.textContent = "Time: " + incidentTime;

    const descriptionText = document.createElement("p");
    descriptionText.textContent = "Description: " + description;

    reportCard.append(
        title,
        locationText,
        dateText,
        timeText,
        descriptionText
    );

    reportsList.prepend(reportCard);

    noReports.style.display = "none";

    formMessage.textContent =
        "Demonstration report displayed successfully.";

    formMessage.style.color = "green";

    console.log("Reporter role:", reporter);

    incidentForm.reset();
});