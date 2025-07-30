
import { useState, useEffect } from 'react';
import './App.css';

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

function App() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ name: '', amount: '', date: getToday() });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('expenses');
    if (data) setExpenses(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.amount) return;
    const newExpense = {
      name: form.name,
      amount: parseFloat(form.amount),
      date: form.date || getToday(),
    };
    if (editIndex !== null) {
      const updated = [...expenses];
      updated[editIndex] = newExpense;
      setExpenses(updated);
      setEditIndex(null);
    } else {
      setExpenses([newExpense, ...expenses]);
    }
    setForm({ name: '', amount: '', date: getToday() });
  };

  const handleEdit = (idx) => {
    setForm(expenses[idx]);
    setEditIndex(idx);
  };

  const handleDelete = (idx) => {
    if (window.confirm('Bạn có chắc muốn xóa khoản chi này?')) {
      setExpenses(expenses.filter((_, i) => i !== idx));
      if (editIndex === idx) setEditIndex(null);
    }
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="container">
      <h1>Quản lý chi tiêu cá nhân</h1>
      <form className="expense-form" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Tên khoản chi"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="amount"
          type="number"
          placeholder="Số tiền (đ)"
          value={form.amount}
          onChange={handleChange}
          min="0"
          required
        />
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
        />
        <button type="submit">{editIndex !== null ? 'Lưu' : 'Thêm'}</button>
        {editIndex !== null && (
          <button type="button" onClick={() => { setForm({ name: '', amount: '', date: getToday() }); setEditIndex(null); }}>
            Hủy
          </button>
        )}
      </form>

      <h2>Tổng chi tiêu: <span className="total">{total.toLocaleString()} đ</span></h2>

      <ul className="expense-list">
        {expenses.length === 0 && <li>Chưa có khoản chi nào.</li>}
        {expenses.map((e, idx) => (
          <li key={idx} className="expense-item">
            <div>
              <strong>{e.name}</strong> - {e.amount.toLocaleString()} đ
              <span className="date">({e.date})</span>
            </div>
            <div>
              <button onClick={() => handleEdit(idx)}>Sửa</button>
              <button onClick={() => handleDelete(idx)}>Xóa</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
