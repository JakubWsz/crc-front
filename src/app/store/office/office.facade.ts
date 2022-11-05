import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AddOffice, GetListOffice} from "./office.actions";
import {AppState} from "../app.state";
import {
  selectOfficeAddError,
  selectOfficeAddLoading,
  selectOfficeAddSuccess,
  selectOfficeListError,
  selectOfficeListItems,
  selectOfficeListLoading,
  selectOfficeListSuccess,
  selectOfficeDeleteLoading,
  selectOfficeDeleteSuccess,
  selectOfficeDeleteError
} from "./office.selectors";
import {OfficeAddPayload} from "./interfaces/office-add-payload.interface";

@Injectable()
export class OfficeFacade {
  //selectors list
  officeListItems$ = this.store.select(selectOfficeListItems)
  officeListLoading$ = this.store.select(selectOfficeListLoading)
  officeListSuccess$ = this.store.select(selectOfficeListSuccess)
  officeListError$ = this.store.select(selectOfficeListError)

  //selectors add
  officeAddLoading$ = this.store.select(selectOfficeAddLoading)
  officeAddSuccess$ = this.store.select(selectOfficeAddSuccess)
  officeAddError$ = this.store.select(selectOfficeAddError)

  // @TODO: 1. h) Stworzyć atrybuty do których przypisze się selektory wyekportowane z poprzedniego pliku (analogicznie do "dodawania" - loading, success, error)

  // @TODO: 2. h) Stworzyć atrybuty do których przypisze się selektory wyekportowane z poprzedniego pliku (analogicznie do "dodawania" - loading, success, error)

  constructor(private store: Store<AppState>) {
  }

  public getOfficeList(): void {
    this.store.dispatch(new GetListOffice());
  }

  public addOffice(office: OfficeAddPayload): void {
    this.store.dispatch(new AddOffice(office));
  }

  // @TODO: 1. f) Dodać metodę która będzie dispatchować akcję z usuwaniem (argumentem będzie "id", będzie on przekazywany przy wywołaniu klasy, tak jak w addOffice)

  // @TODO: 2. f) Dodać metodę która będzie dispatchować akcję z edycją (argumentem będzie obiekt w którym będzie zawarte "id" oraz reszta pól)

}
