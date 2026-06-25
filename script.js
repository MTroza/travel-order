function generateTravelOrder() {
  document.getElementById("oName").textContent =
    document.getElementById("name").value;

  document.getElementById("oPosition").textContent =
    document.getElementById("position").value;

  document.getElementById("oSalary").textContent =
    document.getElementById("salary").value;

  document.getElementById("oStation").textContent =
    document.getElementById("station").value;

  document.getElementById("oDeparture").textContent =
    document.getElementById("departure").value;

  document.getElementById("oReturn").textContent =
    document.getElementById("return").value;

  document.getElementById("oDestination").textContent =
    document.getElementById("destination").value;

  document.getElementById("oPurpose").textContent =
    document.getElementById("purpose").value;

  document.getElementById("oObjective").textContent =
    document.getElementById("objective").value;

  document.getElementById("oPerdiem").textContent =
    document.getElementById("perdiem").value;

  document.getElementById("oLaborers").textContent =
    document.getElementById("laborers").value;

  document.getElementById("oAppropriation").textContent =
    document.getElementById("appropriation").value;

  document.getElementById("oTransport").textContent =
    document.getElementById("transport").value;

  document.getElementById("oRemarks").textContent =
    document.getElementById("remarks").value;

  document.getElementById("output").style.display = "block";

  document.getElementById("printBtn").style.display = "inline-block";
}
