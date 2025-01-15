"use client";

import { useState } from "react";
import "./form.css";

export default function TaqatForm() {
  const [formData, setFormData] = useState({
    formNumber: "22635",
    customerInfo: "",
    driverName: "",
    vehicleNo: "",
    goods: {
      LM: { qty: "", deduction: "" },
      HM: { qty: "", deduction: "" },
      PRM: { qty: "", deduction: "" },
      AL: { qty: "", deduction: "" },
      Cop1: { qty: "", deduction: "" },
      Cop2: { qty: "", deduction: "" },
      Mg: { qty: "", deduction: "" },
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

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]:
        typeof prev[section] === "object"
          ? { ...prev[section], [field]: value }
          : value,
    }));
  };

  const handleGoodsChange = (item, field, value) => {
    setFormData((prev) => ({
      ...prev,
      goods: {
        ...prev.goods,
        [item]: {
          ...prev.goods[item],
          [field]: value,
        },
      },
    }));
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <div className="company-logo">TAQAT</div>
        <div className="form-number">No. {formData.formNumber}</div>
      </div>

      <div className="form-grid">
        <div className="form-section customer-info">
          <label>Customer / Supplier</label>
          <input
            type="text"
            value={formData.customerInfo}
            onChange={(e) =>
              handleInputChange("customerInfo", "", e.target.value)
            }
          />
        </div>

        <div className="form-section driver-info">
          <label>Driver Name</label>
          <input
            type="text"
            value={formData.driverName}
            onChange={(e) =>
              handleInputChange("driverName", "", e.target.value)
            }
          />
        </div>

        <div className="form-section vehicle-info">
          <label>Vehicle No.</label>
          <input
            type="text"
            value={formData.vehicleNo}
            onChange={(e) =>
              handleInputChange("vehicleNo", "", e.target.value)
            }
          />
        </div>

        <div className="form-section goods-table">
          <table>
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
                  <td>{item}</td>
                  <td>
                    <input
                      type="text"
                      value={values.qty}
                      onChange={(e) =>
                        handleGoodsChange(item, "qty", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={values.deduction}
                      onChange={(e) =>
                        handleGoodsChange(item, "deduction", e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="form-section weights-section">
          <div className="weight-box">
            <div className="weight-header">
              <div>
                <label>Vehicle No.</label>
                <input
                  type="text"
                  value={formData.weights.first.vehicleNo}
                  onChange={(e) =>
                    handleInputChange("weights", "first", {
                      ...formData.weights.first,
                      vehicleNo: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label>Consec No.</label>
                <input
                  type="text"
                  value={formData.weights.first.consecNo}
                  onChange={(e) =>
                    handleInputChange("weights", "first", {
                      ...formData.weights.first,
                      consecNo: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="weight-details">
              <div>
                <label>Date</label>
                <input
                  type="date"
                  value={formData.weights.first.date}
                  onChange={(e) =>
                    handleInputChange("weights", "first", {
                      ...formData.weights.first,
                      date: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label>Time</label>
                <input
                  type="time"
                  value={formData.weights.first.time}
                  onChange={(e) =>
                    handleInputChange("weights", "first", {
                      ...formData.weights.first,
                      time: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label>Weight</label>
                <input
                  type="text"
                  value={formData.weights.first.weight}
                  onChange={(e) =>
                    handleInputChange("weights", "first", {
                      ...formData.weights.first,
                      weight: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form-section net-weight">
          <label>Net Weight</label>
          <input
            type="text"
            value={formData.netWeight}
            onChange={(e) =>
              handleInputChange("netWeight", "", e.target.value)
            }
          />
        </div>

        <div className="form-section signature-section">
          <div>
            <label>Signature</label>
            <input
              type="text"
              value={formData.signature}
              onChange={(e) =>
                handleInputChange("signature", "", e.target.value)
              }
            />
          </div>
          <div>
            <label>Date</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange("date", "", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
