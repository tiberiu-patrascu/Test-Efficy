1 SELECT count(*) AS nb FROM COMPANIES WHERE CITY = 'Bangkok' OR CITY = 'Brussels';

2 SELECT TOP 5 CITY FROM COMPANIES ORDER BY K_COMPANY DESC;

3 SELECT DISTINCT K_COMPANY FROM COMPANIES, CONTACTS WHERE COMPANIES.K_COMPANY = CONTACTS.K_CONTACT; 

4 SELECT * FROM COMPANIES INNER JOIN CONTACTS ON COMPANIES.K_COMPANY = CONTACTS.K_CONTACT ORDER BY COMPANIES.NAME ASC, CONTACTS.NAME DESC;

5 SELECT count(K_CONTACT) FROM CONTACTS WHERE K_CONTACT NOT IN (SELECT K_CONTACT FROM COMPANIES INNER JOIN CONTACTS ON COMPANIES.K_COMPANY = CONTACTS.K_CONTACT);

