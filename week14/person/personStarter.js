import { ListController, SelectionController }                   from "./controller.js";
import {MasterView, DetailView, Person, selectionMold, noPerson} from './person.js';


const listController      = ListController(Person);
const selectionController = SelectionController(noPerson, selectionMold);

// create the sub-views, incl. binding

MasterView(listController, selectionController, document.getElementById('masterContainer'));
DetailView(selectionController, document.getElementById('detailContainer'));

// binding of the main view

document.getElementById('plus').onclick    = _ => listController.addModel();
