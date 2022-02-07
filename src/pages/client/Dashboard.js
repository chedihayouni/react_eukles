import { CardContent, Typography, Card } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useClients } from '../../store/hooks/client.hooks';
import { useMaterials } from '../../store/hooks/material.hooks';
import { useSales } from '../../store/hooks/sale.hooks';
import Formsy from 'formsy-react';
import { Select, MenuItem, InputLabel } from '@material-ui/core';

const Dashboard = () => {

  const { loadSales, sales } = useSales();
  const { loadClients, clients} = useClients();
  const { loadMaterials, materials, addSale } = useMaterials();

  const [client, setClient] = useState('');
  const [material, setMaterial] = useState('');

  const handleChangeClient = (event) => {
    setClient(event.target.value);
  };

  const handleChangeMaterial = (event) => {
    setMaterial(event.target.value);
  };

  useEffect(() => {
    loadSales();
  }, []);

  useEffect(() => {
    loadClients();
  }, []);
  
  useEffect(() => {
    loadMaterials();
  }, []);

  let areaForm;
  const handleSubmit = (form) => {
    addSale({
      'client': client,
      'material': material
    });
    loadSales()
    areaForm.reset();
  };

  return (
    <div className="container py-5">
      <div className="clients">
        {sales.length > 0 &&
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Le client le plus rentabe
              </Typography>
              <Typography variant="h10" component="div">
              Nom: {sales[0].name}
              </Typography>
              <Typography variant="h10" component="div">
              Ventes: {sales[0].sales} $
              </Typography>
            </CardContent>
          </Card>
          }
        <h1 className="text-center mb-4">Liste des clients</h1>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>Nom</th>
              <th>Ventes</th>
            </tr>
            {sales.map((element) => (
              <tr key={element.id}>
                <td>{element.name}</td>
                <td>{element.sales} $</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1 className="text-center mb-4">Ajouter une vente</h1>
        <Formsy
          method="post"
          onSubmit={handleSubmit}
          ref={(form) => (areaForm = form)}
        >
          <div className="form-group">
            <div>
              <div div className="v-flex">
                <InputLabel id="material">Client</InputLabel>
                <Select
                  className="form-control mr-3"
                  variant="outlined"
                  labelId="client"
                  id="client"
                  value={client}
                  label="Client"
                  onChange={handleChangeClient}
                >
                  {clients &&
                    clients.map(client => {
                      return (
                        <MenuItem value={client.id} key={client.id}>
                          {client.name}
                        </MenuItem>
                      );
                    })}
                </Select>
              </div>
              <div className="v-flex">
                <InputLabel id="material">Matériel</InputLabel>
                <Select
                  className="form-control mr-3"
                  variant="outlined"
                  labelId="material"
                  id="material"
                  value={material}
                  label="Material"
                  onChange={handleChangeMaterial}
                >
                  {materials &&
                    materials.map(material => {
                      return (
                        <MenuItem value={material.id} key={material.id}>
                          {material.name} {material.price} $
                        </MenuItem>
                      );
                    })}
                </Select>
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                Ajouter
              </button>
            </div> 
          </div>
        </Formsy>
      </div>
    </div>
  );
}


export default Dashboard;
