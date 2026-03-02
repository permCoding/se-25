const str = `id020_333    12_345   4
45  555  
888_999_007
_23_234
34_  034_345  34_345
  2_333_555_999 `;

const ex_01 = () => {
    const regex = /\b([1-9]\d{0,2})(_(\d{3}))*\b/gm;
    const subst = `$1$3`;
    const result = str.replace(regex, subst);
    console.log('ex_01: ', result);    
}

const ex_02 = () => {
    const regex = /\b[1-9]\d{0,2}(_\d{3})*\b/gm;
    const subst = (m) => m.replace(/_/g, '');
    const result = str.replace(regex, subst);
    console.log('ex_02: ', result);    
}

ex_01();
ex_02();
