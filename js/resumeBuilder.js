var bio = {
    "name": "Himanshu Srivastava",
    "role": "Web Developer",
    "contacts": {
        "email": "Himanshu_srvst@yahoo.in",
        "mobile": "8388897545",
        "github": "himsrv",
        "twitter": "@him_srv",
        "location": "India"
    },
    "bioPic": "images/biopic.jpg",
    "welcomeMessage": "Hi, contact me if you find something intriguing :)",
    "skills": [
        "Android", "Python", "Android Jailbreak", "Web Developement", "C", "Java"
    ]
};

var education = {
    "schools": [{
        "name": "Haldia Institute of Technology",
        "location": "Haldia",
        "dates": "2017",
        "degree": "B.Tech",
        "url": "hithaldia.in",
        "majors": ["IT"]
    }],
    "onlineCourses": [{
        "title": "Nanodegree",
        "school": "Udacity",
        "dates": "July-2017",
        "url": "https://classroom.udacity.com/nanodegrees/nd001"
    }]
};

var work = {
    "jobs": [{
            "employer": "Infosys",
            "title": "System Engineer",
            "location": "Mysore",
            "dates": "January 2015-December 2018",
            "description": "When passing in complex HTML, some browsers may not generate a DOM that exactly replicates" +
                " the HTML source provided. As mentioned, jQuery uses the browser's .innerHTML property to parse the passed" +
                " HTML and insert it into the current document. During this process, some browsers filter out certain elements" +
                " such as <html>, <title>, or <head> elements. As a result, the elements inserted may not be representative of" +
                " the original string passed."
        },
        {
            "employer": "Microsoft",
            "title": "Software Developer",
            "location": "Mumbai",
            "dates": "January 2019-Present",
            "description": "When passing in complex HTML, some browsers may not generate a DOM that exactly replicates" +
                " the HTML source provided. As mentioned, jQuery uses the browser's .innerHTML property to parse the passed" +
                " HTML and insert it into the current document. During this process, some browsers filter out certain elements" +
                " such as <html>, <title>, or <head> elements. As a result, the elements inserted may not be representative of" +
                " the original string passed."
        }
    ]
};
var projects = {
    "projects": [{
        "title": "Big Data",
        "dates": "2017",
        "description": "When passing in complex HTML, some browsers may not generate a DOM that exactly replicates" +
            " the HTML source provided. As mentioned, jQuery uses the browser's .innerHTML property to parse the passed" +
            " HTML and insert it into the current document. During this process, some browsers filter out certain elements" +
            " such as <html>, <title>, or <head> elements. As a result, the elements inserted may not be representative of" +
            " the original string passed.",
        "images": ["images/bd1.jpg", "images/bd2.jpg"]
    }]
};


bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(i) {
            $("#skills").append(HTMLskills.replace("%data%", i));
        });
    }
    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
}


work.display = function() {
    work.jobs.forEach(function(j) {
        $("#workExperience").append(HTMLworkStart);
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", j.employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", j.title);
        $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", j.dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", j.location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", j.description));
    });
}


projects.display = function() {
    projects.projects.forEach(function(i) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", i.title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", i.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", i.description));
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", i.images[0]));
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", i.images[1]));
    });
}


education.display = function() {
    education.schools.forEach(function(k) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", k.name) + HTMLschoolDegree.replace("%data%", k.degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", k.dates));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", k.majors));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", k.location));
    });
    education.onlineCourses.forEach(function(i) {
        $("<div class=education-entry id=onlineCourses></div>").insertAfter(".education-entry")
        $("<br>" + HTMLonlineClasses).insertBefore("div#onlineCourses");
        $("#onlineCourses").append(HTMLonlineTitle.replace("%data%", i.title) + HTMLonlineSchool.replace("%data%", i.school));
        $("#onlineCourses").append(HTMLonlineDates.replace("%data%", i.dates));
        $("#onlineCourses").append(HTMLonlineURL.replace("%data%", i.url));
    });
}

bio.display();
work.display();
projects.display();
education.display();

function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name.join(" ");
}

$(internationalizeButton).insertBefore("#mapDiv");
$("#mapDiv").append(googleMap);
