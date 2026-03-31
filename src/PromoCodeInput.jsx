import { useRef } from 'react';

function PromoCodeInput() {
  const promoInputRef = useRef(null);

  const handleFocus = () => {
    console.log('Nút Focus được bấm');
    promoInputRef.current.focus();
  };

  const handleApply = () => {
    const promoCode = promoInputRef.current.value;
    console.log('Mã khuyến mãi:', promoCode);
    alert(`Mã khuyến mãi: ${promoCode}`);
    promoInputRef.current.value = '';
  };

  return (
    <div className="promo-container">
      <div className="promo-box">
        <h2>Nhập Mã Khuyến Mãi</h2>
        
        <div className="input-group">
          <input
            ref={promoInputRef}
            type="text"
            placeholder="Nhập mã khuyến mãi"
            className="promo-input"
            defaultValue=""
          />
        </div>

        <div className="button-group">
          <button onClick={handleFocus} className="focus-btn">
            Focus Input
          </button>
          <button onClick={handleApply} className="apply-btn">
            Áp Dụng
          </button>
        </div>
      </div>
    </div>
  );
}

export default PromoCodeInput;