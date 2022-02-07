import React from 'react';
import { useClients } from '../../store/hooks/client.hooks';
import { useMaterials } from '../../store/hooks/material.hooks';
import Formsy from 'formsy-react';
import TextFieldFormsy from '../../common/FormsyTextField';


const Store = () => {

  const { addClient, loadClients } = useClients();
  const { addMaterial } = useMaterials();

  let areaForm;
  const handleSubmitClient = (form) => {
    addClient(form);
    loadClients();
    areaForm.reset();
  };

  const handleSubmitMaterial = (form) => {
    addMaterial(form);
    areaForm.reset();
  };

  return (
    <div className="container py-5">
      <div className="clients">
        <h1 className="text-center mb-4">Ajouter un client</h1>
        <Formsy
          method="post"
          onSubmit={handleSubmitClient}
          ref={(form) => (areaForm = form)}
        >
          <div className="form-group">
            <div className="d-flex">
              <TextFieldFormsy
                id="name"
                className="form-control mt-9"
                type="text"
                name="name"
                label="Nom"
                validations={{
                  minLength: 1,
                }}
                validationErrors={{
                  minLength: "Au moins un caractère",
                }}
                variant="outlined"
                required
              /> 
              <button type="submit" size="lg" className="btn btn-primary mt-12, ml-3">
                Ajouter
              </button>
            </div>
          </div>
        </Formsy>
        <h1 className="text-center mb-4">Ajouter un matériel</h1>
        <Formsy
          method="post"
          onSubmit={handleSubmitMaterial}
          ref={(form) => (areaForm = form)}
        >
          <div className="form-group">
            <div className="d-flex">
              <TextFieldFormsy
                id="name"
                className="form-control mt-9"
                type="text"
                name="name"
                label="Nom"
                validations={{
                  minLength: 1,
                }}
                validationErrors={{
                  minLength: "Au moins un caractère",
                }}
                variant="outlined"
                required
              />
              <TextFieldFormsy
                id="price"
                className="form-control mt-9"
                type="number"
                name="price"
                label="Prix"
                variant="outlined"
                required
              />
              <button type="submit" size="lg" className="btn btn-primary mt-12, ml-3">
                Ajouter
              </button>
            </div>
          </div>
        </Formsy>
      </div>
    </div>
  );
}


export default Store;
