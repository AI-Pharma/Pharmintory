interface drugStats {
    currency?: '₵';
    stock: number;
    quantity: number;
    productName: string;
    sellingPrice: number;
    quantityMetric?: 'mg' | 'ml';
    status: 'Approved' | 'Pending' | 'Rejected';
    stockUnits: 'boxes' | 'cartons' | 'packs' | 'cases' | 'containers' | 'bottles' | 'vials' | 'tubes';
    category: 'Tablet' | 'Syrup' | 'Injection' | 'Saline' | 'Inhaler' | 'Cream' | 'Oral Solution';
    expiryDate: string;
}

export const drugs: drugStats[] = [
    {
        productName: 'Paracetamol 500mg',
        category: 'Tablet',
        sellingPrice: 12.5,
        stockUnits: 'boxes', // tablets come in boxes (strips inside)
        quantity: 120,
        stock: 85,
        status: 'Approved',
        expiryDate: '2026-03-12',
    },
    {
        productName: 'Amoxicillin 250mg',
        category: 'Tablet',
        sellingPrice: 20,
        stockUnits: 'boxes',
        quantity: 75,
        stock: 40,
        status: 'Pending',
        expiryDate: '2025-11-05',
    },
    {
        productName: 'Ibuprofen 200mg',
        category: 'Tablet',
        sellingPrice: 15,
        stockUnits: 'boxes',
        quantity: 200,
        stock: 150,
        status: 'Approved',
        expiryDate: '2027-01-23',
    },
    {
        productName: 'Cough Syrup 100ml',
        category: 'Syrup',
        sellingPrice: 18,
        stockUnits: 'cartons', // syrups come in bottles packed in cartons
        quantity: 60,
        stock: 20,
        status: 'Rejected',
        expiryDate: '2024-12-31',
    },
    {
        productName: 'Vitamin C Tablets',
        category: 'Tablet',
        sellingPrice: 8.75,
        stockUnits: 'boxes',
        quantity: 250,
        stock: 180,
        status: 'Approved',
        expiryDate: '2027-05-18',
    },
    {
        productName: 'Metformin 500mg',
        category: 'Tablet',
        sellingPrice: 22.4,
        stockUnits: 'boxes',
        quantity: 90,
        stock: 70,
        status: 'Pending',
        expiryDate: '2025-09-14',
    },
    {
        productName: 'Antihistamine Syrup',
        category: 'Syrup',
        sellingPrice: 14.5,
        stockUnits: 'cartons',
        quantity: 100,
        stock: 65,
        status: 'Approved',
        expiryDate: '2026-02-02',
    },
    {
        productName: 'Insulin Injection',
        category: 'Injection',
        sellingPrice: 55,
        stockUnits: 'vials', // insulin is sold in vials
        quantity: 50,
        stock: 30,
        status: 'Rejected',
        expiryDate: '2025-07-22',
    },
    {
        productName: 'Hydrocortisone Cream',
        category: 'Cream',
        sellingPrice: 19,
        stockUnits: 'tubes', // creams come in tubes
        quantity: 40,
        stock: 15,
        status: 'Approved',
        expiryDate: '2026-10-09',
    },
    {
        productName: 'Azithromycin 500mg',
        category: 'Tablet',
        sellingPrice: 35,
        stockUnits: 'boxes',
        quantity: 60,
        stock: 25,
        status: 'Pending',
        expiryDate: '2026-04-17',
    },
    {
        productName: 'Saline Infusion 0.9% 500ml',
        category: 'Saline',
        sellingPrice: 25,
        stockUnits: 'cases', // saline stored in cases (bags or bottles)
        quantity: 40,
        stock: 20,
        status: 'Approved',
        expiryDate: '2027-02-10',
    },
    {
        productName: 'Asthalin Inhaler',
        category: 'Inhaler',
        sellingPrice: 45,
        stockUnits: 'packs', // inhalers usually come in individual or multi packs
        quantity: 35,
        stock: 18,
        status: 'Pending',
        expiryDate: '2026-08-04',
    },
    {
        productName: 'Zinc Oral Solution 100ml',
        category: 'Oral Solution',
        sellingPrice: 16,
        stockUnits: 'cartons', // oral solutions (liquid) often come in cartons
        quantity: 70,
        stock: 55,
        status: 'Approved',
        expiryDate: '2026-12-22',
    },
    {
        productName: 'Ceftriaxone Injection 1g',
        category: 'Injection',
        sellingPrice: 60,
        stockUnits: 'vials', // injections like ceftriaxone come in vials
        quantity: 45,
        stock: 28,
        status: 'Approved',
        expiryDate: '2027-04-14',
    },
    {
        productName: 'Topical Antifungal Cream',
        category: 'Cream',
        sellingPrice: 21,
        stockUnits: 'tubes',
        quantity: 50,
        stock: 35,
        status: 'Rejected',
        expiryDate: '2025-10-05',
    },
];
