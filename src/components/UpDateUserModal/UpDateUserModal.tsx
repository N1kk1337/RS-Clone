import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './style.scss';

function UpDateUserModal(active: any, setActive: any) {
  // const [firstName, setFirstName] = useState('');

  return (
    <div
      className={active ? 'active' : 'modal'}
      onClick={() => setActive(!active)}
      onKeyDown={() => { }}
      role="button"
      tabIndex={0}
    >
      <div className="register register-active">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="fs-4">First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Karina"
              // onChange={(e) => handleInputChange(e)}
              id="first-name"
            // value={email}
            // required
            />
            {/* {isEmail ? <p className="error">Email is not valid</p> : ''} */}
          </Form.Group>

          <Button variant="primary" type="submit">
            UpDate
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default UpDateUserModal;
