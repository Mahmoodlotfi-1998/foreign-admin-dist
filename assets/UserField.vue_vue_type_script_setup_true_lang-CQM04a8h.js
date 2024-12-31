import{d as E,o as c,aa as k,a as y,a6 as $,aG as j,p as r,w as f}from"./index-C59nPxhS.js";import{C as H}from"./BasicMainCard-DYu65gub.js";import{F as J}from"./index-hdx7AmHB.js";const K={class:"flex justify-between items-center md:block"},Q={class:"text-gray-400"},W={key:0,class:"font-bold mt-1"},X={key:1,class:"mt-1"},l=E({__name:"BasicInfoItem",props:{title:{},value:{},isLine:{type:Boolean}},setup(q){return(e,Z)=>(c(),k("div",K,[y("div",Q,$(e.title)+":",1),e.value?(c(),k("div",W,$(e.value),1)):(c(),k("div",X,[j(e.$slots,"default")]))]))}}),x={class:"flex flex-col gap-2 overflow-y-auto"},ee={class:"grid md:grid-cols-3 gap-2"},re={class:"grid md:grid-cols-3 gap-2"},le={class:"grid md:grid-cols-3 gap-2"},ae={class:"grid md:grid-cols-3 gap-2"},ue={class:"grid md:grid-cols-3 gap-2"},oe={class:"grid md:grid-cols-3 gap-2"},te={class:"grid md:grid-cols-3 gap-2"},se={class:"grid md:grid-cols-3 gap-2"},ie={class:"grid md:grid-cols-3 gap-2"},ne={class:"grid md:grid-cols-3 gap-2"},me={class:"grid md:grid-cols-3 gap-2"},Fe=E({__name:"UserField",props:{userForm:{}},setup(q){return(e,Z)=>{const b=H,U=J;return c(),k("div",null,[r(U,{model:e.userForm,ref:"formRef",autocomplete:"off"},{default:f(()=>[y("div",x,[r(b,{title:"Conditions",bordered:""},{default:f(()=>{var a,u,o,t,s,i,n,m,d;return[y("div",ee,[r(l,{title:"Complete Profile",value:(a=e.userForm)!=null&&a.complete_profile?"Yes":"No"},null,8,["value"]),r(l,{title:"Current LTV above 80",value:(u=e.userForm)!=null&&u.current_ltv_above_80?"Yes":"No"},null,8,["value"]),r(l,{title:"First Mortgage Interest Rate above 65",value:(o=e.userForm)!=null&&o.first_mortgage_interest_rate_above_65?"Yes":"No"},null,8,["value"]),r(l,{title:"Age above 55",value:(t=e.userForm)!=null&&t.age_above_55?"Yes":"No"},null,8,["value"]),r(l,{title:"FMLA above 1 and SMLA above 1",value:(s=e.userForm)!=null&&s.fmla_above1_and_smla_above1?"Yes":"No"},null,8,["value"]),r(l,{title:"Current Tax Year above 20000",value:(i=e.userForm)!=null&&i.current_tax_year_above20000?"Yes":"No"},null,8,["value"]),r(l,{title:"Owner-Occupied Residential No",value:(n=e.userForm)!=null&&n.owner_occupied_residential_no?"Yes":"No"},null,8,["value"]),r(l,{title:"SR Date above and FMLA",value:(m=e.userForm)!=null&&m.sr_date_above_and_fmla?"Yes":"No"},null,8,["value"]),r(l,{title:"Current LTV above 50",value:(d=e.userForm)!=null&&d.current_ltv_above_50?"Yes":"No"},null,8,["value"])])]}),_:1}),r(b,{title:"Personal Information",bordered:""},{default:f(()=>{var a,u,o,t,s,i,n,m,d,v,g,F,_,p;return[y("div",re,[r(l,{title:"Age",value:((a=e.userForm)==null?void 0:a.age)??"-"},null,8,["value"]),r(l,{title:"Ethnicity",value:((u=e.userForm)==null?void 0:u.ethnicity)!==""?(o=e.userForm)==null?void 0:o.ethnicity:"-"},null,8,["value"]),r(l,{title:"Gender",value:((t=e.userForm)==null?void 0:t.gender)!==""?(s=e.userForm)==null?void 0:s.gender:"-"},null,8,["value"]),r(l,{title:"Marital Status",value:((i=e.userForm)==null?void 0:i.marital_status)!==""?(n=e.userForm)==null?void 0:n.marital_status:"-"},null,8,["value"]),r(l,{title:"Occupation",value:((m=e.userForm)==null?void 0:m.occupation)!==""?(d=e.userForm)==null?void 0:d.occupation:"-"},null,8,["value"]),r(l,{title:"Presence of Children",value:(v=e.userForm)!=null&&v.presence_of_children?"Yes":"No"},null,8,["value"]),r(l,{title:"Owner Name(s) Formatted",value:((g=e.userForm)==null?void 0:g.owner_name_formatted)!==""?(F=e.userForm)==null?void 0:F.owner_name_formatted:"-"},null,8,["value"]),r(l,{title:"Email",value:((_=e.userForm)==null?void 0:_.email)!==""?(p=e.userForm)==null?void 0:p.email:"-"},null,8,["value"])])]}),_:1}),r(b,{title:"Contact & Address Information",bordered:""},{default:f(()=>{var a,u,o,t,s,i,n,m,d,v,g,F,_,p,h,M,N,C,S,T,Y,A;return[y("div",le,[r(l,{title:"APN",value:((a=e.userForm)==null?void 0:a.apn)??"-"},null,8,["value"]),r(l,{title:"Phone Number",value:((u=e.userForm)==null?void 0:u.phone_number)??"-"},null,8,["value"]),r(l,{title:"Phone Number Type",value:((o=e.userForm)==null?void 0:o.phone_number_type)!==""?(t=e.userForm)==null?void 0:t.phone_number_type:"-"},null,8,["value"]),r(l,{title:"Property Address",value:((s=e.userForm)==null?void 0:s.property_address)!==""?(i=e.userForm)==null?void 0:i.property_address:"-"},null,8,["value"]),r(l,{title:"City",value:((n=e.userForm)==null?void 0:n.city)!==""?(m=e.userForm)==null?void 0:m.city:"-"},null,8,["value"]),r(l,{title:"State",value:((d=e.userForm)==null?void 0:d.state)!==""?(v=e.userForm)==null?void 0:v.state:"-"},null,8,["value"]),r(l,{title:"ZIP Code",value:((g=e.userForm)==null?void 0:g.zip_code)??"-"},null,8,["value"]),r(l,{title:"Mailing Address",value:((F=e.userForm)==null?void 0:F.mailing_address)!==""?(_=e.userForm)==null?void 0:_.mailing_address:"-"},null,8,["value"]),r(l,{title:"Mailing City",value:((p=e.userForm)==null?void 0:p.mailing_city)!==""?(h=e.userForm)==null?void 0:h.mailing_city:"-"},null,8,["value"]),r(l,{title:"Mailing State",value:((M=e.userForm)==null?void 0:M.mailing_state)!==""?(N=e.userForm)==null?void 0:N.mailing_state:"-"},null,8,["value"]),r(l,{title:"Mailing ZIP Code",value:((C=e.userForm)==null?void 0:C.mailing_zip_code)??"-"},null,8,["value"]),r(l,{title:"Mailing County Name",value:((S=e.userForm)==null?void 0:S.mailing_county_name)!==""?(T=e.userForm)==null?void 0:T.mailing_county_name:"-"},null,8,["value"]),r(l,{title:"County Name",value:((Y=e.userForm)==null?void 0:Y.county_name)!==""?(A=e.userForm)==null?void 0:A.county_name:"-"},null,8,["value"])])]}),_:1}),r(b,{title:"Property Information",bordered:""},{default:f(()=>{var a,u,o,t,s,i,n,m,d,v,g,F,_,p,h,M,N,C,S,T,Y,A,L,P,I,D,w,R,V,B,O,G,z;return[y("div",ae,[r(l,{title:"Lot Number",value:((a=e.userForm)==null?void 0:a.lot_number)??"-"},null,8,["value"]),r(l,{title:"Block",value:((u=e.userForm)==null?void 0:u.block)!==""?(o=e.userForm)==null?void 0:o.block:"-"},null,8,["value"]),r(l,{title:"Tract",value:((t=e.userForm)==null?void 0:t.tract)!==""?(s=e.userForm)==null?void 0:s.tract:"-"},null,8,["value"]),r(l,{title:"Subdivision",value:((i=e.userForm)==null?void 0:i.subdivision)!==""?(n=e.userForm)==null?void 0:n.subdivision:"-"},null,8,["value"]),r(l,{title:"Census Tract",value:((m=e.userForm)==null?void 0:m.census_tract)??"-"},null,8,["value"]),r(l,{title:"Thomas Guide Grid",value:((d=e.userForm)==null?void 0:d.thomas_guide_grid)!==""?(v=e.userForm)==null?void 0:v.thomas_guide_grid:"-"},null,8,["value"]),r(l,{title:"Thomas Guide Page",value:((g=e.userForm)==null?void 0:g.thomas_guide_page)??"-"},null,8,["value"]),r(l,{title:"Bedrooms",value:((F=e.userForm)==null?void 0:F.bedrooms)??"-"},null,8,["value"]),r(l,{title:"Bathrooms",value:((_=e.userForm)==null?void 0:_.bathrooms)??"-"},null,8,["value"]),r(l,{title:"Number of Rooms",value:((p=e.userForm)==null?void 0:p.number_of_rooms)??"-"},null,8,["value"]),r(l,{title:"Lot Size SF / Acre",value:((h=e.userForm)==null?void 0:h.lot_size_sf_acre)??"-"},null,8,["value"]),r(l,{title:"Number of Units",value:((M=e.userForm)==null?void 0:M.number_of_units)??"-"},null,8,["value"]),r(l,{title:"Stories",value:((N=e.userForm)==null?void 0:N.stories)??"-"},null,8,["value"]),r(l,{title:"Building / Living Area SF",value:((C=e.userForm)==null?void 0:C.building_living_area_sf)??"-"},null,8,["value"]),r(l,{title:"Pool Type",value:((S=e.userForm)==null?void 0:S.pool_type)!==""?(T=e.userForm)==null?void 0:T.pool_type:"-"},null,8,["value"]),r(l,{title:"Pool",value:(Y=e.userForm)!=null&&Y.pool?"Yes":"No"},null,8,["value"]),r(l,{title:"Year Built",value:((A=e.userForm)==null?void 0:A.year_built)??"-"},null,8,["value"]),r(l,{title:"Style",value:((L=e.userForm)==null?void 0:L.style)!==""?(P=e.userForm)==null?void 0:P.style:"-"},null,8,["value"]),r(l,{title:"Property Type",value:((I=e.userForm)==null?void 0:I.property_type)!==""?(D=e.userForm)==null?void 0:D.property_type:"-"},null,8,["value"]),r(l,{title:"Garage Type",value:((w=e.userForm)==null?void 0:w.garage_type)!==""?(R=e.userForm)==null?void 0:R.garage_type:"-"},null,8,["value"]),r(l,{title:"Garage Capacity",value:((V=e.userForm)==null?void 0:V.garage_capacity)??"-"},null,8,["value"]),r(l,{title:"Fireplace",value:((B=e.userForm)==null?void 0:B.fireplace)!==void 0?(O=e.userForm)!=null&&O.fireplace?"Yes":"No":"-"},null,8,["value"]),r(l,{title:"Zoning",value:((G=e.userForm)==null?void 0:G.zoning)!==""?(z=e.userForm)==null?void 0:z.zoning:"-"},null,8,["value"])])]}),_:1}),r(b,{title:"Mortgage & Loan Information",bordered:""},{default:f(()=>{var a,u,o,t,s,i,n,m,d,v,g,F,_,p,h,M;return[y("div",ue,[r(l,{title:"1st Mortgage Loan Amount",value:((a=e.userForm)==null?void 0:a.first_mortgage_loan_amount)??"-"},null,8,["value"]),r(l,{title:"1st Mortgage Loan Type",value:((u=e.userForm)==null?void 0:u.first_mortgage_loan_type)!==""?(o=e.userForm)==null?void 0:o.first_mortgage_loan_type:"-"},null,8,["value"]),r(l,{title:"1st Mortgage Interest Rate",value:((t=e.userForm)==null?void 0:t.first_mortgage_interest_rate)??"-"},null,8,["value"]),r(l,{title:"1st Mortgage Financing",value:((s=e.userForm)==null?void 0:s.first_mortgage_financing)!==""?(i=e.userForm)==null?void 0:i.first_mortgage_financing:"-"},null,8,["value"]),r(l,{title:"2nd Mortgage Loan Amount",value:((n=e.userForm)==null?void 0:n.second_mortgage_loan_amount)??"-"},null,8,["value"]),r(l,{title:"2nd Mortgage Loan Type",value:((m=e.userForm)==null?void 0:m.second_mortgage_loan_type)!==""?(d=e.userForm)==null?void 0:d.second_mortgage_loan_type:"-"},null,8,["value"]),r(l,{title:"2nd Mortgage Interest Rate",value:((v=e.userForm)==null?void 0:v.second_mortgage_interest_rate)??"-"},null,8,["value"]),r(l,{title:"2nd Mortgage Financing",value:((g=e.userForm)==null?void 0:g.second_mortgage_financing)!==""?(F=e.userForm)==null?void 0:F.second_mortgage_financing:"-"},null,8,["value"]),r(l,{title:"1st Mortgage Maturity Date",value:((_=e.userForm)==null?void 0:_.first_mortgage_maturity_date)!==""?(p=e.userForm)==null?void 0:p.first_mortgage_maturity_date:"-"},null,8,["value"]),r(l,{title:"2nd Mortgage Maturity Date",value:((h=e.userForm)==null?void 0:h.second_mortgage_maturity_date)!==""?(M=e.userForm)==null?void 0:M.second_mortgage_maturity_date:"-"},null,8,["value"])])]}),_:1}),r(b,{title:"Tax & Assessed Property Values",bordered:""},{default:f(()=>{var a,u,o,t,s,i,n,m,d,v,g,F,_;return[y("div",oe,[r(l,{title:"Assessed Improved Value",value:((a=e.userForm)==null?void 0:a.assessed_improved_value)??"-"},null,8,["value"]),r(l,{title:"Assessed Land Value",value:((u=e.userForm)==null?void 0:u.assessed_land_value)??"-"},null,8,["value"]),r(l,{title:"Assessed Year",value:((o=e.userForm)==null?void 0:o.assessed_year)??"-"},null,8,["value"]),r(l,{title:"Market Improvement Value",value:((t=e.userForm)==null?void 0:t.market_improvement_value)??"-"},null,8,["value"]),r(l,{title:"Market Land Value",value:((s=e.userForm)==null?void 0:s.market_land_value)??"-"},null,8,["value"]),r(l,{title:"Assessed Total Value",value:((i=e.userForm)==null?void 0:i.assessed_total_value)??"-"},null,8,["value"]),r(l,{title:"Assessed Market Value",value:((n=e.userForm)==null?void 0:n.assessed_market_value)??"-"},null,8,["value"]),r(l,{title:"Delinquent Taxes",value:(m=e.userForm)!=null&&m.delinquent_taxes?"Yes":"No"},null,8,["value"]),r(l,{title:"Delinquent Tax Year",value:((d=e.userForm)==null?void 0:d.delinquent_tax_year)??"-"},null,8,["value"]),r(l,{title:"Tax Exemptions",value:((v=e.userForm)==null?void 0:v.tax_exemptions)!==""?(g=e.userForm)==null?void 0:g.tax_exemptions:"-"},null,8,["value"]),r(l,{title:"Tax Rate Area",value:((F=e.userForm)==null?void 0:F.tax_rate_area)!==""?(_=e.userForm)==null?void 0:_.tax_rate_area:"-"},null,8,["value"])])]}),_:1}),r(b,{title:"Sale Information",bordered:""},{default:f(()=>{var a,u,o,t,s,i,n,m,d,v,g,F,_;return[y("div",te,[r(l,{title:"Sale Price",value:((a=e.userForm)==null?void 0:a.sale_price)??"-"},null,8,["value"]),r(l,{title:"Sale Recording Date",value:((u=e.userForm)==null?void 0:u.sale_recording_date)!==""?(o=e.userForm)==null?void 0:o.sale_recording_date:"-"},null,8,["value"]),r(l,{title:"Sale Contract Date",value:((t=e.userForm)==null?void 0:t.sale_contract_date)!==""?(s=e.userForm)==null?void 0:s.sale_contract_date:"-"},null,8,["value"]),r(l,{title:"Sale Type",value:((i=e.userForm)==null?void 0:i.sale_type)!==""?(n=e.userForm)==null?void 0:n.sale_type:"-"},null,8,["value"]),r(l,{title:"Sale Doc Number",value:((m=e.userForm)==null?void 0:m.sale_doc_number)!==""?(d=e.userForm)==null?void 0:d.sale_doc_number:"-"},null,8,["value"]),r(l,{title:"Sale Book Number",value:((v=e.userForm)==null?void 0:v.sale_book_number)!==""?(g=e.userForm)==null?void 0:g.sale_book_number:"-"},null,8,["value"]),r(l,{title:"Sale Page Number",value:((F=e.userForm)==null?void 0:F.sale_page_number)!==""?(_=e.userForm)==null?void 0:_.sale_page_number:"-"},null,8,["value"])])]}),_:1}),r(b,{title:"Ownership & Residential Status",bordered:""},{default:f(()=>{var a,u,o,t;return[y("div",se,[r(l,{title:"Owner Occupied Residential",value:((a=e.userForm)==null?void 0:a.owner_occupied_residential)!==void 0?(u=e.userForm)!=null&&u.owner_occupied_residential?"Yes":"No":"-"},null,8,["value"]),r(l,{title:"Foreclosure",value:((o=e.userForm)==null?void 0:o.foreclosure)!==void 0?(t=e.userForm)!=null&&t.foreclosure?"Yes":"No":"-"},null,8,["value"])])]}),_:1}),r(b,{title:"General Financial Information",bordered:""},{default:f(()=>{var a,u,o,t,s,i;return[y("div",ie,[r(l,{title:"Income",value:(a=e.userForm)!=null&&a.income?(u=e.userForm)==null?void 0:u.income:"-"},null,8,["value"]),r(l,{title:"Combined Origination LTV",value:(o=e.userForm)!=null&&o.combined_origination_ltv?((t=e.userForm)==null?void 0:t.combined_origination_ltv)+"%":"-"},null,8,["value"]),r(l,{title:"Current LTV",value:(s=e.userForm)!=null&&s.current_ltv?(i=e.userForm)==null?void 0:i.current_ltv:"-"},null,8,["value"])])]}),_:1}),r(b,{title:"Financial Information Section",bordered:""},{default:f(()=>{var a,u,o,t,s,i,n,m,d,v,g,F,_,p,h,M,N,C,S,T;return[y("div",ne,[r(l,{title:"Market Year",value:(a=e.userForm)!=null&&a.market_year?(u=e.userForm)==null?void 0:u.market_year:"-"},null,8,["value"]),r(l,{title:"Current Tax Year",value:(o=e.userForm)!=null&&o.current_tax_year?(t=e.userForm)==null?void 0:t.current_tax_year:"-"},null,8,["value"]),r(l,{title:"Current Year Tax Amount",value:(s=e.userForm)!=null&&s.current_year_tax_amount?(i=e.userForm)==null?void 0:i.current_year_tax_amount:"-"},null,8,["value"]),r(l,{title:"Homestead Exemption",value:(n=e.userForm)!=null&&n.homestead_exemption?(m=e.userForm)!=null&&m.homestead_exemption?"Yes":"No":"-"},null,8,["value"]),r(l,{title:"1st Mortgage Lender Name - Originated",value:((d=e.userForm)==null?void 0:d.first_mortgage_lender_name_originated)!==""?(v=e.userForm)==null?void 0:v.first_mortgage_lender_name_originated:"-"},null,8,["value"]),r(l,{title:"1st Mortgage Recording Date",value:((g=e.userForm)==null?void 0:g.first_mortgage_recording_date)!==""?(F=e.userForm)==null?void 0:F.first_mortgage_recording_date:"-"},null,8,["value"]),r(l,{title:"2nd Mortgage Lender Name - Originated",value:((_=e.userForm)==null?void 0:_.second_mortgage_lender_name_originated)!==""?(p=e.userForm)==null?void 0:p.second_mortgage_lender_name_originated:"-"},null,8,["value"]),r(l,{title:"2nd Mortgage Recording Date",value:((h=e.userForm)==null?void 0:h.second_mortgage_recording_date)!==""?(M=e.userForm)==null?void 0:M.second_mortgage_recording_date:"-"},null,8,["value"]),r(l,{title:"3rd Mortgage Maturity Date",value:((N=e.userForm)==null?void 0:N.third_mortgage_maturity_date)!==""?(C=e.userForm)==null?void 0:C.third_mortgage_maturity_date:"-"},null,8,["value"]),r(l,{title:"4th Mortgage Maturity Date",value:((S=e.userForm)==null?void 0:S.fourth_mortgage_maturity_date)!==""?(T=e.userForm)==null?void 0:T.fourth_mortgage_maturity_date:"-"},null,8,["value"])])]}),_:1}),r(b,{title:"Property Details Section",bordered:""},{default:f(()=>{var a,u,o,t;return[y("div",me,[r(l,{title:"FIPS Code",value:(a=e.userForm)!=null&&a.fips_code?(u=e.userForm)==null?void 0:u.fips_code:"-"},null,8,["value"]),r(l,{title:"Detailed Property Type",value:((o=e.userForm)==null?void 0:o.detailed_property_type)!==""?(t=e.userForm)==null?void 0:t.detailed_property_type:"-"},null,8,["value"])])]}),_:1})])]),_:1},8,["model"])])}}});export{Fe as _};
