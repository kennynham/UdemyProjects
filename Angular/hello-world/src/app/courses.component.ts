//We need to register this component as a module. We do that in app.module.ts.
import { Component } from '@angular/core'; //We use the Component decorator to make this class an component. We need to import it first.
import { CoursesService } from './courses.service';

//This is the Component decorator
//We apply the component to the class
@Component({
    selector: 'courses', //We want to reference an element of <courses>
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})

export class CoursesComponent { //Use the name component in the name of the class.
    title = "List of courses";
    subtitle = "mah dude";
    colspan = 2; //add "attr." to the attribute when binding inside of the template.
    isActive = true; //Used for the class binding.
    courses;
    
    // Used for event binding.
    onSave($event) {
        $event.stopPropagation(); //This is used to prevent the bubbling up of events from the DOM.
        console.log("Button was clicked", $event);
        alert("Button was clicked");
    }

    // Used for event binding
    onKeyUp($event) {
        if ($event.keyCode === 13) alert("ENTER was pressed"); //The key code for ENTER is 13
    }

    onKeyUpWithEventFiltering($event) {
        alert("ENTER was pressed"); //The key code for ENTER is 13
    }

    onKeyUpUsingVariable(email) {
        alert(email);
    }

    twoWayBindingEmail = "thisisan@email.com";
    onKeyUpTwoWayBinding() {
        alert(this.twoWayBindingEmail);
    }


    // You can create functions to be used in the {{}} above.
    getSubtitle() {
        return this.subtitle;
    }

    constructor(service: CoursesService) {
        //let service = new CoursesService();   //We can use it like this but it is not a good practice for unit testing.
                                                //If we add more parameters to the constructor of CoursesService then we will need to add
                                                //parameters here to match those same parameters. 
                                                //*****Add "service: CoursesService" to this constructor parameter instead to avoid this issue.*****
                                                //Angular will automatically instantiate a new CoursesService object.
                                                //It also decouples CoursesService to CoursesComponent.
        this.courses = service.getCourses();

        //We will need to instruct Angular to create an instance of CoursesService and pass it to our CoursesComponent. AKA Dependency Injection.
        //Depency injection is injecting, or providing the dependencies of a class into its constructor.
        //We do this by adding it to "providers" in app.module.ts.
    }
}
