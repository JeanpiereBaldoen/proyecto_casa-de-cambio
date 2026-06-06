package com.casacambio.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "tipos_cambio")
public class TipoCambio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal compra;

    private BigDecimal venta;

    @ManyToOne
    @JoinColumn(name = "moneda_id")
    private Moneda moneda;

    public TipoCambio() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BigDecimal getCompra() {
        return compra;
    }

    public void setCompra(BigDecimal compra) {
        this.compra = compra;
    }

    public BigDecimal getVenta() {
        return venta;
    }

    public void setVenta(BigDecimal venta) {
        this.venta = venta;
    }

    public Moneda getMoneda() {
        return moneda;
    }

    public void setMoneda(Moneda moneda) {
        this.moneda = moneda;
    }
}