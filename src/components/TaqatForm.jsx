"use client";

import { useState, useRef } from "react";
import taqatLogo from "../assets/taqat-logo.jpg";
import {
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Table,
    Row,
    Col,
    Card,
    CardBody,
    Button,
     Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css";
import SignatureCanvas from "react-signature-canvas";

export default function TaqatForm() {
    // State to track the selected checkbox
    const [selectedCheckbox, setSelectedCheckbox] = useState(null);
    //   const handleCheckboxChange = (item) => {
    //     console.log('itemmm', item)
    //     setSelectedCheckbox(item);
    //   };
    const handleCheckboxChange = (item) => {
        setFormData((prev) => ({
            ...prev,
            goods: {
                ...prev.goods,
                [item]: {
                    ...prev.goods[item],
                    check: !prev.goods[item].check, // Toggle the check value
                },
            },
        }));
    };

    const [formData, setFormData] = useState({
        formNumber: "22635",
        customerInfo: "",
        driverName: "",
        vehicleNo: "",
        goods: {
            LM: { qty: "", deduction: "", check: false },
            HM: { qty: "", deduction: "", check: true },
            PRM: { qty: "", deduction: "", check: false },
            AL: { qty: "", deduction: "", check: false },
            Cop1: { qty: "", deduction: "", check: false },
            Cop2: { qty: "", deduction: "", check: false },
            Mg: { qty: "", deduction: "", check: false },
        },
        weights: {
            first: {
                weight: "",
                vehicleNo: "",
                consecNo: "",
                date: "",
                time: "",
            },
            second: {
                weight: "",
                vehicleNo: "",
                consecNo: "",
                date: "",
                time: "",
            },
        },
        netWeight: "",
        signature: "",
        date: "",
    });
    console.log('formData', formData)
    const handleInputChange = (section, field, value) => {
        setFormData((prev) => ({
            ...prev,
            [section]:
                typeof prev[section] === "object"
                    ? { ...prev[section], [field]: value }
                    : value,
        }));
    };



    //signature functionalty
    const signaturePadRef = useRef(null);

    const clearSignature = () => {
        signaturePadRef.current.clear();
        handleInputChange("signature", "", "");
    };

    const saveSignature = () => {
        const signatureDataURL = signaturePadRef.current.toDataURL();
        handleInputChange("signature", "", signatureDataURL);
    };



    //modal 
    const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const handleSubmit = () => {
    setFormData({
        formNumber: "22635",
        customerInfo: "",
        driverName: "",
        vehicleNo: "",
        goods: {
            LM: { qty: "", deduction: "", check: false },
            HM: { qty: "", deduction: "", check: true },
            PRM: { qty: "", deduction: "", check: false },
            AL: { qty: "", deduction: "", check: false },
            Cop1: { qty: "", deduction: "", check: false },
            Cop2: { qty: "", deduction: "", check: false },
            Mg: { qty: "", deduction: "", check: false },
        },
        weights: {
            first: {
                weight: "",
                vehicleNo: "",
                consecNo: "",
                date: "",
                time: "",
            },
            second: {
                weight: "",
                vehicleNo: "",
                consecNo: "",
                date: "",
                time: "",
            },
        },
        netWeight: "",
        signature: "",
        date: "",
    });
    signaturePadRef.current.clear();

    toggle()
  }

    return (
        <>
        <Container className="my-4 text-align-center" style={{ maxWidth: "1200px", width: "100%" }}>
            <Form className="trading-form position-relative">
                {/* Header */}
                <div className="company-logo position-absolute" style={{ visibility: 'hidden', right: "10px", top: "10px" }}>
                    <img
                        src={taqatLogo}
                        alt="TAQAT Logo"
                        className="logo"
                    />

                </div>
                <div className="form-header ">


                    <div className="form-numberr">
                        <h2 className="taqat_color">TAQAT</h2>
                    </div>

                    <div className="company-logo-sm ">
                        <img
                            src={taqatLogo}
                            alt="TAQAT Logo"
                            className="logo"
                        />

                    </div>


                    <div className="d-flex flex-column align-items-center text-align-center justify-content-center taqat_color">
                        <h4 className="" >TAQAT MINERAL TRADING CO.</h4>
                        <h4 className="" > SAUDI LISTED COMPANY. </h4>
                        <h6 className="" style={{ textAlign: 'center' }}>VAT NO: 310410766100003</h6>
                    </div>
                    <div className="company-logo-lg ">
                        <img
                            src={taqatLogo}
                            alt="TAQAT Logo"
                            className="logo"
                        />

                    </div>

                </div>
                <div className="form-header-new mb-4">
                    <div style={{ maxWidth: "300px" }}>

                        <FormGroup className="d-flex">
                            <Label for="driverName" style={{ width: '65px' }}> <span><b>No.</b> <span className="taqat_color">PI/</span></span> </Label>
                            <Input
                                id="driverName"
                                type="text"
                                value={formData.formNumber}
                                onChange={(e) =>
                                    handleInputChange("formNumber", "", e.target.value)
                                }
                            />
                        </FormGroup>
                    </div>
                </div>


                {/* Main Form Content */}
                <Row className="mt-4">
                    <Col md={6}>
                        <Card className="mb-3">
                            <CardBody>
                                <FormGroup>
                                    <Label for="customerSupplier">Customer / Supplier</Label>
                                    <Input
                                        id="customerSupplier"
                                        type="text"
                                        value={formData.customerInfo}
                                        onChange={(e) =>
                                            handleInputChange("customerInfo", "", e.target.value)
                                        }
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="driverName">Driver Name</Label>
                                    <Input
                                        id="driverName"
                                        type="text"
                                        value={formData.driverName}
                                        onChange={(e) =>
                                            handleInputChange("driverName", "", e.target.value)
                                        }
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="vehicleNo">Vehicle No.</Label>
                                    <Input
                                        id="vehicleNo"
                                        type="text"
                                        value={formData.vehicleNo}
                                        onChange={(e) =>
                                            handleInputChange("vehicleNo", "", e.target.value)
                                        }
                                    />
                                </FormGroup>
                            </CardBody>
                        </Card>

                        <Card className="mb-3">
                            <CardBody>
                                <Table bordered responsive>
                                    <thead>
                                        <tr>
                                            <th>Description</th>
                                            <th>Qty.</th>
                                            <th>Deduction</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.entries(formData.goods).map(([item, values]) => (
                                            <tr key={item}>
                                                <td>
                                                    <div className="d-flex w-100 gap-2 ">
                                                        <span className=" description_td_1">{item}</span>

                                                        <span className=" description_td_2">
                                                            {console.log('itemmdfsdfsa', item)}
                                                            {console.log('valuesvalues', values)}
                                                            <FormGroup
                                                                check
                                                                inline

                                                                onChange={() => handleCheckboxChange(item)}

                                                            >
                                                                <Input
                                                                    checked={values.check}
                                                                    className="input-check" type="checkbox" />

                                                            </FormGroup>
                                                        </span>
                                                    </div>

                                                </td>
                                                <td>
                                                    <Input
                                                        type="text"
                                                        value={values.qty}
                                                        onChange={(e) =>
                                                            handleInputChange("goods", item, {
                                                                ...values,
                                                                qty: e.target.value,
                                                            })
                                                        }
                                                        disabled={!values.check}
                                                    />
                                                </td>
                                                <td>
                                                    <Input
                                                        type="text"
                                                        value={values.deduction}
                                                        onChange={(e) =>
                                                            handleInputChange("goods", item, {
                                                                ...values,
                                                                deduction: e.target.value,
                                                            })
                                                        }
                                                        disabled={!values.check}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        {/* Weight Measurements */}
                        <Card className="mb-3">
                            <CardBody>
                                <h6>First Weight</h6>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Vehicle No.</Label>
                                            <Input
                                                type="text"
                                                value={formData.weights.first.vehicleNo}
                                                onChange={(e) =>
                                                    handleInputChange("weights", "first", {
                                                        ...formData.weights.first,
                                                        vehicleNo: e.target.value,
                                                    })
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Consec No.</Label>
                                            <Input
                                                type="text"
                                                value={formData.weights.first.consecNo}
                                                onChange={(e) =>
                                                    handleInputChange("weights", "first", {
                                                        ...formData.weights.first,
                                                        consecNo: e.target.value,
                                                    })
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label>Date</Label>
                                            <Input
                                                type="date"
                                                value={formData.weights.first.date}
                                                onChange={(e) =>
                                                    handleInputChange("weights", "first", {
                                                        ...formData.weights.first,
                                                        date: e.target.value,
                                                    })
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label>Time</Label>
                                            <Input
                                                type="time"
                                                value={formData.weights.first.time}
                                                onChange={(e) =>
                                                    handleInputChange("weights", "first", {
                                                        ...formData.weights.first,
                                                        time: e.target.value,
                                                    })
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label>Weight (kg)</Label>
                                            <Input
                                                type="text"
                                                value={formData.weights.first.weight}
                                                onChange={(e) =>
                                                    handleInputChange("weights", "first", {
                                                        ...formData.weights.first,
                                                        weight: e.target.value,
                                                    })
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>

                        {/* Second Weight */}
                        <Card className="mb-3">
                            <CardBody>
                                <h6>Second Weight</h6>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Vehicle No.</Label>
                                            <Input
                                                type="text"
                                                value={formData.weights.second.vehicleNo}
                                                onChange={(e) =>
                                                    handleInputChange("weights", "second", {
                                                        ...formData.weights.first,
                                                        vehicleNo: e.target.value,
                                                    })
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Consec No.</Label>
                                            <Input
                                                type="text"
                                                value={formData.weights.second.consecNo}
                                                onChange={(e) =>
                                                    handleInputChange("weights", "second", {
                                                        ...formData.weights.second,
                                                        consecNo: e.target.value,
                                                    })
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label>Date</Label>
                                            <Input
                                                type="date"
                                                value={formData.weights.second.date}
                                                onChange={(e) =>
                                                    handleInputChange("weights", "second", {
                                                        ...formData.weights.second,
                                                        date: e.target.value,
                                                    })
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label>Time</Label>
                                            <Input
                                                type="time"
                                                value={formData.weights.second.time}
                                                onChange={(e) =>
                                                    handleInputChange("weights", "second", {
                                                        ...formData.weights.second,
                                                        time: e.target.value,
                                                    })
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label>Weight (kg)</Label>
                                            <Input
                                                type="text"
                                                value={formData.weights.second.weight}
                                                onChange={(e) =>
                                                    handleInputChange("weights", "second", {
                                                        ...formData.weights.second,
                                                        weight: e.target.value,
                                                    })
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <FormGroup>
                                    <Label>Net Weight (kg)</Label>
                                    <Input
                                        type="text"
                                        value={formData.netWeight}
                                        onChange={(e) =>
                                            handleInputChange("netWeight", "", e.target.value)
                                        }
                                    />
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                {/* Signature Section */}
                <Card className="mt-3">
                    <CardBody>
                        <Row>
                            {/* <Col md={6}>
                                <FormGroup>
                                    <Label>Signature</Label>
                                    <Input
                                        type="text"
                                        value={formData.signature}
                                        onChange={(e) =>
                                            handleInputChange("signature", "", e.target.value)
                                        }
                                    />
                                </FormGroup>
                            </Col> */}
                            <Col md={6}>
                                <FormGroup>
                                    <Label>Signature</Label>
                                    <div
                                        style={{
                                            border: "1px solid #ccc",
                                            borderRadius: "5px",
                                            height: "150px",
                                            position: "relative",
                                        }}
                                    >
                                        <SignatureCanvas
                                            ref={signaturePadRef}
                                            penColor="black"
                                            canvasProps={{
                                                width: 300,
                                                height: 150,
                                                className: "sigCanvas",
                                            }}
                                        />
                                        <div
                                            style={{
                                                position: "absolute",
                                                bottom: "10px",
                                                right: "10px",
                                            }}
                                        >
                                            <button
                                                type="button"
                                                onClick={clearSignature}
                                                style={{ marginRight: "10px" }}
                                            >
                                                Clear
                                            </button>
                                            <button type="button" onClick={saveSignature}>
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>Date</Label>
                                    <Input
                                        type="date"
                                        value={formData.date}
                                        onChange={(e) =>
                                            handleInputChange("date", "", e.target.value)
                                        }
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>

                    <div className="d-flex justify-content-center align-items-center mb-2">
                        <Button
                            color="warning"
                            size="lg"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </div>

                </Card>
                <Row>
                    <Col className="w-100 d-flex flex-column justify-content-center align-items-center mt-4">
                        <div className="px-3 d-flex">
                            <p>Riyadh - C.R 1010521233 - P.O Box 46847 - Code: 14545 - Tel: +966 510020302</p>

                        </div>
                        <div>
                            <p className="taqat_color">Email: info@taqatco.sa</p>
                        </div>
                    </Col>
                </Row>
            </Form>


           
        </Container>
         <Modal isOpen={modal} toggle={toggle} >
         <ModalHeader toggle={toggle}>Congratulations! </ModalHeader>
         <ModalBody>
            Your response is submitted successfully!
         </ModalBody>
         
     </Modal>
    
     </>
    );
}
