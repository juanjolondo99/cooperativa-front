import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsociadosComponent } from "./pages/asociados/asociados.component"
import { ProductosComponent } from "./pages/productos/productos.component"
import { MovimientosComponent } from "./pages/movimientos/movimientos.component"

const routes: Routes = [
  { path: '', redirectTo: '/asociados', pathMatch: 'full' },
  { path: 'asociados', component: AsociadosComponent },
  { path: 'productos/:id', component: ProductosComponent },
  { path: 'movimientos/:idAsociado/:idProducto', component: MovimientosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
