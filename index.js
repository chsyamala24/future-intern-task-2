let leads = [];

function addLead(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let source = document.getElementById("source").value;
    let status = document.getElementById("status").value;

    if(name === "" || email === "" || source === ""){
        alert("Please fill all fields");
        return;
    }

    let lead = {
        name:name,
        email:email,
        source:source,
        status:status
    };

    leads.push(lead);

    displayLeads();

    clearForm();
}

function displayLeads(){

    let leadList = document.getElementById("leadList");

    leadList.innerHTML = "";

    leads.forEach((lead,index)=>{

        let statusClass = "";

        if(lead.status === "New"){
            statusClass = "status-new";
        }

        else if(lead.status === "Contacted"){
            statusClass = "status-contacted";
        }

        else{
            statusClass = "status-converted";
        }

        leadList.innerHTML += `

        <tr>
            <td>${lead.name}</td>
            <td>${lead.email}</td>
            <td>${lead.source}</td>
            <td class="${statusClass}">${lead.status}</td>
            <td>
                <button class="delete-btn"
                onclick="deleteLead(${index})">
                Delete
                </button>
            </td>
        </tr>

        `;
    });
}

function deleteLead(index){

    leads.splice(index,1);

    displayLeads();
}

function clearForm(){

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("source").value = "";
    document.getElementById("status").value = "New";
}
